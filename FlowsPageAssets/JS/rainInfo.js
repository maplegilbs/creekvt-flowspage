/*The purpose of this document is to retrieve rainfall data from NOAA, USGS
 * and to output 1, 3, 6, 12, 24 hour totals in table format with identification as to which location that data
 * was retrieved from as well as a timestamp on the observations
 */

//Declaring variables
const inPerM = 39.3701;
const noaaStationIDs = {
  Burlington: "KBTV",
  "Saint Johnsbury": "K1V4",
  Bennington: "KDDH",
  "Montpelier/Barre": "KMPV",
  "Morrisville/Stowe": "KMVL",
  Springfield:
    "KVSF" /*, "Rutland": "KRUT", "Caledonia": "KCDA", "Franklin County": "KFSO"*/,
};
const usgsStationIDs = {
  "AYERS BROOK AT RANDOLPH, VT ": "01142500",
  "EAST ORANGE BRANCH AT EAST ORANGE, VT ": "01139800",
  "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT ": "04282525",
  "MAD RIVER NEAR MORETOWN, VT ": "04288000",
  "MISSISQUOI RIVER NEAR NORTH TROY, VT ": "04293000",
  "MISSISQUOI RIVER NEAR EAST BERKSHIRE, VT": "04293500",
  "OTTAUQUECHEE RIVER NEAR WEST BRIDGEWATER, VT": "01150900"
};
const noaaStations = Object.keys(noaaStationIDs);
const usgsStations = Object.keys(usgsStationIDs);
//Array to be filled with promises from fetched API calls
let noaaFetchArray = [];
//Final object for storing rain data from all sources
let rainData = {};

/*------General Functions-----*/
/*----------------------------*/

function loaderHide() {
  document.getElementById("rainLoader").style.display = "none";
  document.getElementById("rainLoading").style.display = "none";
}

//API Fetch Data Function for JSON format
async function getRainFallJSON(url) {
  let data = await fetch(url);
  data = await data.json();
  return data;
}
//properly formatting minutes
const twoDigitMins = function (inputMins) {
  if (inputMins < 10) {
    inputMins = inputMins.toString();
    inputMins = "0" + inputMins;
  }
  return inputMins;
};

//returning color for rainfall total
const rainColors = function (rainfallTotal) {
  let color = "#ffffff";
  switch (true) {
    case rainfallTotal < 0.25:
      color = "#ddd"; //'#699fd0';
      break;
    case rainfallTotal < 1:
      color = "#3cb447";
      break;
    case rainfallTotal < 2:
      color = "#f6f63d";
      break;
    case rainfallTotal < 2.5:
      color = "#fbde88";
      break;
    case rainfallTotal < 3:
      color = "#f7ac3c";
      break;
    case rainfallTotal >= 3:
      color = "#f73c3c";
      break;
  }
  return color;
};

//making a string for date output to user
const readableDate = function (inputDate) {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let jsInputDate = new Date(inputDate);
  let year = jsInputDate.getFullYear();
  let month = jsInputDate.getMonth() + 1;
  let day = jsInputDate.getDate();
  let dOW = daysOfWeek[jsInputDate.getDay()];
  let hour = jsInputDate.getHours();
  let mornEve = "am";
  if (hour === 12) {
    mornEve = "pm";
  }
  if (hour > 12) {
    hour -= 12;
    mornEve = "pm";
  }
  let minute = jsInputDate.getMinutes();
  minute = twoDigitMins(minute);
  let formattedDate =
    dOW +
    ", " +
    month +
    "/" +
    day +
    "/" +
    year +
    "</br>" +
    hour +
    ":" +
    minute +
    " " +
    mornEve;
  return formattedDate;
};

/*--------NOAA Section--------*/
/*----------------------------*/

//Create url for api call based on input station ID
function noaaAPIURL(stationId) {
  return "https://api.weather.gov/stations/" + stationId + "/observations";
}

//Create array of urls, one for each stations api call
let noaaStationUrls = noaaStations.map((station) => {
  console.log(noaaAPIURL(noaaStationIDs[station]));
  return noaaAPIURL(noaaStationIDs[station]);
});

//Sort out of order json data from NOAA - as of Oct 21 issues with this api call returning unordered data
function noaaJSONSort(obsObj) {
  try {
    let obs = Object.keys(obsObj["features"]).length;
    let newObsObj = {};
    let timeStampArray = [];
    let count = 0;
    for (let i = 0; i < obs; i++) {
      //make array of timestamps in chronological order new to old
      let timeStamp = obsObj["features"][i]["properties"]["timestamp"];
      timeStampArray.push(timeStamp);
      timeStampArray.sort();
      timeStampArray.reverse();
    }
    for (let i = 0; i < timeStampArray.length; i++) {
      let curTime = timeStampArray[i];
      for (let j = 0; j < obs; j++) {
        //use those timestamps to resort fetched data in chronological order new to old, add to new object
        if (obsObj["features"][j]["properties"]["timestamp"] === curTime) {
          newObsObj[count] = obsObj["features"][j];
          count++;
        }
      }
    }
    return newObsObj;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

//Create array of objects 'noaaFetchArray', one for each response of the NOAA API call of each station.
//If there is an error in returned data adjust that station's information in the rainData object to reflect as such
//and pass over adding that to the 'noaaFetchArray'
async function noaaFetch() {
  for (let i = 0; i < noaaStationUrls.length; i++) {
    noaaFetchArray.push(getRainFallJSON(noaaStationUrls[i]));
  }
  let noaaFetchedData = await Promise.all(noaaFetchArray);
  for (let i = 0; i < noaaFetchedData.length; i++) {
    let returnedData = noaaJSONSort(noaaFetchedData[i]);
    if (returnedData === undefined || Object.keys(returnedData).length == 0) {
      console.log("catch error here", noaaStations[i]);
      rainData[noaaStations[i]] = {
        metadata: {
          source: "noaa",
          icon: "<img src='./FlowsPageAssets/Images/NOAALogo1.png'>",
        },
        data: {
          "1hr": "Err",
          "3hr": "Err",
          "6hr": "Err",
          "12hr": "Err",
          "24hr": "Err",
          readingDateTime: "unavailable",
        },
      };
    } else {
      noaaFetchArray.push(returnedData);
    }
  }
  return noaaFetchArray;
}

//Pass data from each fetched object to the addNOAAStationsToRainDataObj function to caclulate accumulated rainfall and build a new object with formatted desired data
function noaaRainfall(fetchedData) {
  for (let i = 0; i < fetchedData.length; i++) {
    if (
      fetchedData[i] === undefined ||
      Object.keys(fetchedData[i]).length == 0
    ) {
      i++;
    } else {
      let currentResult = fetchedData[i];
      addNOAAStationsToRainDataObj(currentResult);
    }
  }
}

//Create object containing an object for each station's accumulated rainfall for the past 1,3,6,12,24 hrs
function addNOAAStationsToRainDataObj(stationData) {
  let totalObs = Object.keys(stationData).length;
  let tempObj = {};
  let station = stationData[0]["properties"]["station"].slice(-4);
  let stationName = noaaStations.find(
    (name) => noaaStationIDs[name] == station
  );
  let i = 0;
  //time of most recent report
  let currentDateTime = new Date(stationData[i]["properties"]["timestamp"]);
  let timeHolder, rainAccum;
  do {
    if (i === 0) {
      console.log(i);
      let duration = minutesPastTheHr(currentDateTime);
      //loop until initial report falls on 51 or 54 min past the hour - per NOAA these are when the METAR (Meteorological Aerodrome Report) are published for each station
      while (duration !== 51 && duration !== 54) {
        i++;
        currentDateTime = new Date(stationData[i]["properties"]["timestamp"]);
        duration = minutesPastTheHr(currentDateTime);
      }
      //once first report that falls on 51 or 54 min past the hour is identified, establsih it as the starting point and  populate initial last hour rain total
      currentDateTime = new Date(stationData[i]["properties"]["timestamp"]);
      timeHolder = currentDateTime;
      rainAccum =
        stationData[i]["properties"]["precipitationLastHour"]["value"] * inPerM;
      if (Math.round(rainAccum * 100) / 100 < 0.01) {
        tempObj["1hr"] = 0;
      } else {
        tempObj["1hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
      }
      tempObj["1hrColor"] = rainColors(tempObj["1hr"]);
      tempObj["readingDateTime"] = readableDate(
        stationData[i]["properties"]["timestamp"]
      );
      i++;
    } else {
      let obsvDateTime = new Date(stationData[i]["properties"]["timestamp"]);
      let obsvTimeGap = Math.abs((obsvDateTime - timeHolder) / 3600000);
      if (obsvTimeGap >= 1) {
        timeHolder = obsvDateTime;
        rainAccum +=
          stationData[i]["properties"]["precipitationLastHour"]["value"] *
          inPerM;
        let timeDiff = (currentDateTime - obsvDateTime) / 3600000;
        //console.log(stationName, 'Rain Accum: ', (Math.round(rainAccum*100))/100, 'Time since prior obs: ', obsvTimeGap,'Time since initial obs: ', timeDiff, 'Most recent rain: ', stationData[i]['properties']['precipitationLastHour']['value']*inPerM)
        //will cycle through and overwrite tempObj property with each iteration until next case
        switch (true) {
          case timeDiff <= 3:
            if (Math.round(rainAccum * 100) / 100 < 0.01) {
              tempObj["3hr"] = 0;
            } else {
              tempObj["3hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
            }
            tempObj["3hrColor"] = rainColors(tempObj["3hr"]);
            break;
          case timeDiff <= 6:
            if (Math.round(rainAccum * 100) / 100 < 0.01) {
              tempObj["6hr"] = 0;
            } else {
              tempObj["6hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
            }
            tempObj["6hrColor"] = rainColors(tempObj["6hr"]);
            break;
          case timeDiff <= 12:
            if (Math.round(rainAccum * 100) / 100 < 0.01) {
              tempObj["12hr"] = 0;
            } else {
              tempObj["12hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
            }
            tempObj["12hrColor"] = rainColors(tempObj["12hr"]);
            break;
          case timeDiff <= 24.25:
            if (Math.round(rainAccum * 100) / 100 < 0.01) {
              tempObj["24hr"] = 0;
            } else {
              tempObj["24hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
            }
            tempObj["24hrColor"] = rainColors(tempObj["24hr"]);
            break;
          case timeDiff > 24.25:
            i = totalObs;
            break;
        }
        i++;
      } else {
        i++;
      }
    }
  } while (i < totalObs);

  rainData[stationName] = {};
  rainData[stationName]["metadata"] = {};
  rainData[stationName]["metadata"]["source"] = "noaa";
  rainData[stationName]["metadata"]["icon"] =
    "<img src='./FlowsPageAssets/Images/NOAALogo1.png'>";
  rainData[stationName]["data"] = tempObj;
}

//helper function to determine minutes past the hour
function minutesPastTheHr(time) {
  let mins = new Date(time);
  mins = mins.getMinutes();
  return mins;
}

/*--------USGS Section--------*/
/*----------------------------*/

//Build URL for USGS API call (single call for multiple stations)
function usgsAPIURL() {
  let usgsSiteIds = "";
  for (let i = 0; i < usgsStations.length; i++) {
    usgsSiteIds += usgsStationIDs[usgsStations[i]] + ",";
  }
  usgsSiteIds = usgsSiteIds.substr(0, usgsSiteIds.length - 1);
  let url =
    "https://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=" +
    usgsSiteIds +
    "&parameterCd=00045&period=P2D";
  return url;
}

let usgsUrl = usgsAPIURL();

////Create object containing and object for each station's accumulated rainfall for the past 1,3,6,12,24 hrs
function addUSGSStationsToRainDataObj(stationData) {
  let stationsCount = Object.keys(stationData["value"]["timeSeries"]).length;
  for (let i = 0; i < stationsCount; i++) {
    let tempObj = {};
    let currentStation = stationData["value"]["timeSeries"][i];
    let stationName = currentStation["sourceInfo"]["siteName"];
    let rainAccum = 0;
    let observations =
      Object.keys(currentStation["values"][0]["value"]).length - 1;
    let currentDateTime = new Date(
      currentStation["values"][0]["value"][observations]["dateTime"]
    );
    tempObj["readingDateTime"] = readableDate(currentDateTime);
    let timeHolder = currentDateTime;
    for (let j = observations - 1; j >= 0; j--) {
      let obsvDateTime = new Date(
        currentStation["values"][0]["value"][j]["dateTime"]
      );
      rainAccum += Number(currentStation["values"][0]["value"][j]["value"]);
      let timeDiff = (currentDateTime - obsvDateTime) / 3600000;
      //will cycle through and overwrite tempObj property with each iteration until next case
      switch (true) {
        case timeDiff <= 1:
          if (Math.round(rainAccum * 100) / 100 < 0.01) {
            tempObj["1hr"] = 0;
          } else {
            tempObj["1hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
          }
          tempObj["1hrColor"] = rainColors(tempObj["1hr"]);
          break;
        case timeDiff <= 3:
          if (Math.round(rainAccum * 100) / 100 < 0.01) {
            tempObj["3hr"] = 0;
          } else {
            tempObj["3hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
          }
          tempObj["3hrColor"] = rainColors(tempObj["3hr"]);
          break;
        case timeDiff <= 6:
          if (Math.round(rainAccum * 100) / 100 < 0.01) {
            tempObj["6hr"] = 0;
          } else {
            tempObj["6hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
          }
          tempObj["6hrColor"] = rainColors(tempObj["6hr"]);
          break;
        case timeDiff <= 12:
          if (Math.round(rainAccum * 100) / 100 < 0.01) {
            tempObj["12hr"] = 0;
          } else {
            tempObj["12hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
          }
          tempObj["12hrColor"] = rainColors(tempObj["12hr"]);
          break;
        case timeDiff <= 24:
          if (Math.round(rainAccum * 100) / 100 < 0.01) {
            tempObj["24hr"] = 0;
          } else {
            tempObj["24hr"] = (Math.round(rainAccum * 100) / 100).toFixed(2);
          }
          tempObj["24hrColor"] = rainColors(tempObj["24hr"]);
          break;
        case timeDiff > 24:
          j = -1;
          break;
      }
    }
    rainData[stationName] = {};
    rainData[stationName]["metadata"] = {};
    rainData[stationName]["metadata"]["source"] = "ugss";
    rainData[stationName]["metadata"]["icon"] =
      "<img src='./FlowsPageAssets/Images/usgsLogo.png'>";
    rainData[stationName]["data"] = tempObj;
  }
}

//Final function calling other functions to make api calls and pass resulting data into object building functions to compile rainfall data
//Last call of function will bo the to the makeTable function to display data to the DOM
async function compile() {
 // let noaaData = await noaaFetch();
  // await noaaRainfall(noaaData);
  let usgsData = await getRainFallJSON(usgsUrl);
  await addUSGSStationsToRainDataObj(usgsData);
  console.log(rainData);
  await makeTable();
}

compile().then(loaderHide);

//Build DOM elements and populate with data from rainfall object
function makeTable() {
  let table = document.getElementById("rainTable");
  let tbody = table.childNodes[3];
  let stations = Object.keys(rainData).sort();
  for (let i = 0; i < stations.length; i++) {
    let currentStation = stations[i];
    let newRow = document.createElement("tr");
    let rowData = "";

    let oneHrData;
    if (rainData[currentStation]["data"]["1hr"] !== undefined) {
      oneHrData = rainData[currentStation]["data"]["1hr"];
    } else {
      oneHrData = "-";
      rainData[currentStation]["data"]["1hrColor"] = "#ffffff";
    }
    let threeHrData;
    if (rainData[currentStation]["data"]["3hr"] !== undefined) {
      threeHrData = rainData[currentStation]["data"]["3hr"];
    } else {
      threeHrData = "-";
      rainData[currentStation]["data"]["3hrColor"] = "#ffffff";
    }
    let sixHrData;
    if (rainData[currentStation]["data"]["6hr"] !== undefined) {
      sixHrData = rainData[currentStation]["data"]["6hr"];
    } else {
      sixHrData = "-";
      rainData[currentStation]["data"]["6hrColor"] = "#ffffff";
    }
    let twelveHrData;
    if (rainData[currentStation]["data"]["12hr"] !== undefined) {
      twelveHrData = rainData[currentStation]["data"]["12hr"];
    } else {
      twelveHrData = "-";
      rainData[currentStation]["data"]["12hrColor"] = "#ffffff";
    }
    let twentyfourHrData;
    if (rainData[currentStation]["data"]["24hr"] !== undefined) {
      twentyfourHrData = rainData[currentStation]["data"]["24hr"];
    } else {
      twentyfourHrData = "-";
      rainData[currentStation]["data"]["24hrColor"] = "#ffffff";
    }

    if (rainData[currentStation]["data"]["readingDateTime"] == "unavailable") {
      rowData =
        "<td class='stationName'>" +
        currentStation +
        "<br><td class='source'>" +
        rainData[currentStation]["metadata"]["icon"] +
        "</td><td colspan='5' class='noInfo'>Data currently unavailable.  Refresh to try again.</td>";
    } else {
      rowData =
        "<td class='stationName'>" +
        currentStation +
        "<br><span class='rainDate'>" +
        rainData[currentStation]["data"]["readingDateTime"] +
        "</span></td><td class='source'>" +
        rainData[currentStation]["metadata"]["icon"] +
        "</td><td class='mobile-hide' style='color:" +
        rainData[currentStation]["data"]["1hrColor"] +
        "'>" +
        oneHrData +
        "</td><td style='color:" +
        rainData[currentStation]["data"]["3hrColor"] +
        "'>" +
        threeHrData +
        "</td><td style='color:" +
        rainData[currentStation]["data"]["6hrColor"] +
        "'>" +
        sixHrData +
        "</td><td style='color:" +
        rainData[currentStation]["data"]["12hrColor"] +
        "'>" +
        twelveHrData +
        "</td><td class='mobile-hide'  style='color:" +
        rainData[currentStation]["data"]["24hrColor"] +
        "'>" +
        twentyfourHrData +
        "</td>";
    }
    newRow.innerHTML = rowData;
    tbody.appendChild(newRow);
  }
}
