//River Info Javascript
/*Purpose:  Using a pre-establsihed list of USGS gauges for which river correlations have been built
and a pre-established list of rivers and the upper and lower limits for rising, steady and falling 
trends:
compare the current level at each station to the upper and lower limits for each river.  If
it is determined that for any given river the current USGS reading falls within the bounds, that river
will be considered "RUNNING".  If a river is determined to be running, add the following information to
an object:

the name of the river
the corresponding river gauge
the current river level
if the river is running
(more info to be added)

turn the object into an array and then use handlebars template to populate HTML
*/


//Start Code -------------------------------

//imports----

import rivers from './riverData.js';
import { runHandlebars } from './handlebarsRiverTemplate.js';

//global variables
const stationInfo = {};
const riverRunningInfo = {};  //to hold final object with info on currently running, too high, too low, close to running rivers
const riverRunningInfoSorted = {};

//setting categories for objects based on running, too high and too low
riverRunningInfo['running'] = {};
riverRunningInfo['tooLow'] = {};
riverRunningInfo['tooHigh'] = {};
riverRunningInfo['needsInfo'] = {};
riverRunningInfoSorted['running'] = {};
riverRunningInfoSorted['tooLow'] = {};
riverRunningInfoSorted['tooHigh'] = {};
riverRunningInfoSorted['needsInfo'] = {};

let riversInfoArray = []; //to hold array used to populate html via handlebars template
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


//function to display loader until page is completed
function loaderHide() {
	document.getElementById("gaugesLoader").style.display = "none";
	document.getElementById("gaugesLoading").style.display = "none";
};


//function to display snow water equivalent & melt images
function showSnow() {
	let todaysDate = new Date();
	let year = todaysDate.getFullYear().toString();
	let month = (todaysDate.getMonth() + 1).toString();
	if (month < 10) {
		month = "0" + month;
	}
	let day = todaysDate.getDate().toString();
	if (todaysDate.getHours() <= 6 && day > 1) {
		day = day - 1;
	}
	if (day < 10) {
		day = "0" + day;
	}
	let reformattedToday = year + month + day + "05";
	let reformattedMonth = year + month;
	let sweHeader = `Snow Water Equivalent Map for ${month} - ${day} - ${year}`;
	let sweUrl = `https://www.nohrsc.noaa.gov/snow_model/images/full/Northeast/nsm_swe/${reformattedMonth}/nsm_swe_${reformattedToday}_Northeast.jpg`
	let meltHeader = `Melt Rates Map for day prior to ${month} - ${day} - ${year}`;
	let meltUrl = `https://www.nohrsc.noaa.gov/snow_model/images/full/Northeast/nsm_melt_24hr/${reformattedMonth}/nsm_melt_24hr_${reformattedToday}_Northeast.jpg`
	document.getElementById("swe").style.backgroundImage = "url(" + sweUrl + ")";
	document.getElementById("sweLink").href = sweUrl;
	document.getElementById("sweHeader").innerHTML = sweHeader;
	document.getElementById("melt").style.backgroundImage = "url(" + meltUrl + ")";
	document.getElementById("meltLink").href = meltUrl;
	document.getElementById("meltHeader").innerHTML = meltHeader;
}


/*getting data from USGS*/
async function getData() {
	let today = new Date();
	let year = today.getFullYear();
	let month = today.getMonth() + 1;
	let day = today.getDate();
	let startDay = today.getDate() - 1;
	let startMonth = month;
	if (startDay === 0) {
		if (startMonth === 3) {
			startDay = 28;
			startMonth = month - 1;
		}
		else {
			startDay = 30;
			startMonth = month - 1;
		}
	}
	if (day < 10) {
		day = "0" + day.toString()
	}
	let formattedToday = "&startDT=" + year + "-" + startMonth + "-" + startDay + "&endDT=" + year + "-" + month + "-" + day;
	let url = 'https://nwis.waterservices.usgs.gov/nwis/iv/?format=json&sites=01142500,04296280,04296000,01153000,04296500,01138500,04287000,04283500,01133000,01139800,01140817,01170100,04292810,04294500,04294620,04295500,04292500,04292000,04282795,04282780,04282650,04288295,04289000,04288000,04292750,04294000,04293500,04293000,01134500,04282525,04285800,04285500,01151500,01150900,04282000,04282500,04282576,01135500,04294300,01135150,04280000,04288230,04294140,01154000,01135300,04288225,01334000,04288500,01139000,01155500,01144000,01153550,04284751,04286000,04290500,04285000&parameterCd=00060' + formattedToday;
	//await the response of the fetch call
	let response = await fetch(url);
	//proceed once the first promise is resolved.
	let data = await response.json()
	//proceed only when the second promise is resolved
	return data;
}

//call getData function and assigning returned promise to infoObj
let infoObj = getData();

//input current and prior levels as numeric values-> return "rising, falling or steady"
function trend(current, prior) {
	let currentTrend;
	let trendPercent = (current - prior) / prior;
	switch (true) {
		case trendPercent > .05:
			currentTrend = "rising";
			break;
		case trendPercent < -.05:
			currentTrend = "falling";
			break;
		default:
			currentTrend = "steady";
			break;
	}
	return currentTrend;
};

//formatting Time
function reformatTime(inputTime) {
	let now = Date.now();
	let timeOfReport = new Date(inputTime);
	let dOW = daysOfWeek[timeOfReport.getDay()];
	let month = timeOfReport.getMonth() + 1;
	let day = timeOfReport.getDate();
	let hour = timeOfReport.getHours();
	let mornEve = "am";
	if (hour === 12) {
		mornEve = "pm"
	}
	if (hour > 12) {
		hour -= 12;
		mornEve = "pm";
	}
	let minute = timeOfReport.getMinutes();
	if (minute == 0) {
		minute += "0";
	}
	let lastReport = dOW + ", " + month + "/" + day + " @ " + hour + ":" + minute + " " + mornEve;
	return lastReport;
}

//establishing trend arrow type
function trendIcon(inputTrend) {
	let trendArrow;
	switch (inputTrend) {
		case 'rising':
			trendArrow = '&#8657';
			break;
		case 'falling':
			trendArrow = '&#8659';
			break;
		case 'steady':
			trendArrow = '&#8660';
			break;
	}
	return trendArrow;
}













/*------Main Functions ------*/
/*input a gauge, the current level and prior level, will determine what rivers 
that use that gauge as a correlation are running depending on the trend
*/
function generateRiverInfo(compareGauge, compareLevel, compareLevelPrior, promisedData, reportTime, levelChange) {
	let riv;
	let gauges;
	let running;
	let rvrGUpLmt;
	let rvrGLowLmt;
	let riverTitle;
	let gaugeCounter;
	let url;
	let level;

	// getting current trend of gauge arguement using trend function
	let currentTrend = trend(compareLevel, compareLevelPrior);
	let lastReport = reformatTime(reportTime);

	let trendArrow;
	if (levelChange > 0) {
		trendArrow = "up"
	}
	else if (levelChange < 0) {
		trendArrow = "down"
	}
	else trendArrow = "noArrow";

	/*for every river in object "rivers" - 
	compare input Gauge for match, 
	if matched see if current level "compareLevel" falls within bounds for being declared running
	*/
	for (riv in rivers) {
		gauges = rivers[riv]['gauges']; //nested gauges object
		for (let gauge in gauges) {  //loop through gauges associated with river
			//getting current river in the loop's current gauge name
			let riverCorrGaugeName = rivers[riv]['gauges'][gauge]['name'];
			if (riverCorrGaugeName === compareGauge) {

				//if run's gauge has no limits establsihed, put into No Min/Max established seciton via needsInfo object
				if (rivers[riv]['gauges']['gauge1']['steadyLimits']['lowLmt'] === '') {
					if (compareLevel < 0) { level = "Ice", trendArrow = "" }
					else { level = compareLevel };
					riverRunningInfo['needsInfo'][riv] = { name: rivers[riv]['name'], webAddy: rivers[riv]['url'], isNoGauge: true }
					riverRunningInfo['needsInfo'][riv]['gauges'] = {};
					riverRunningInfo['needsInfo'][riv]['gauges']['gauge1'] = { name: compareGauge, webAddy: "", currentLvl: level, trend: trendArrow, reportTime: lastReport, lvlChng: levelChange }
				}

				else { //if run's gauge has limits established, proceed to determine running/toohigh/toolow etc

					//getting current river in the loop's limits based on if level on gauge is rising or falling  
					switch (currentTrend) {
						case 'rising':
							rvrGUpLmt = rivers[riv]['gauges'][gauge]['risingLimits']['upLmt'];
							rvrGLowLmt = rivers[riv]['gauges'][gauge]['risingLimits']['lowLmt'];
							break;
						case 'falling':
							rvrGUpLmt = rivers[riv]['gauges'][gauge]['fallingLimits']['upLmt'];
							rvrGLowLmt = rivers[riv]['gauges'][gauge]['fallingLimits']['lowLmt'];
							break;
						case 'steady':
							rvrGUpLmt = rivers[riv]['gauges'][gauge]['steadyLimits']['upLmt'];
							rvrGLowLmt = rivers[riv]['gauges'][gauge]['steadyLimits']['lowLmt'];
							break;
					}


					//-------------Creating list of rivers that are at runnable levels-------
					if (compareLevel <= rvrGUpLmt && compareLevel >= rvrGLowLmt) {
						running = true;
						//seeing if gauge information has already been added to riverRunningInfo object
						if (riv in riverRunningInfo['running']) {
							//if gauges & info already exist, set the gauge counter to be the number of existing guages plus one   
							if ('gauges' in riverRunningInfo['running'][riv]) {
								gaugeCounter = Object.keys(riverRunningInfo['running'][riv]['gauges']).length + 1;
							}
						}
						//if no guage information exists yet, add new river info and blank object for gauges
						else {
							gaugeCounter = 1;
							riverTitle = rivers[riv]['name']
							if (rivers[riv].hasOwnProperty('url')) {
								url = rivers[riv]['url'];
							}
							else { url = "" }
							riverRunningInfo['running'][riv] = { name: riverTitle, webAddy: url }
							riverRunningInfo['running'][riv]['gauges'] = {}
						}
						let gaugeNum = "gauge" + gaugeCounter;
						let percentFull = (compareLevel - rvrGLowLmt) / (rvrGUpLmt - rvrGLowLmt) * 100;
						percentFull = percentFull + "%";
						//build the object for rivers that are running
						riverRunningInfo['running'][riv]['gauges'][gaugeNum] = { name: compareGauge, webAddy: url, isRunning: running, currentLvl: compareLevel, percentile: percentFull, flowColor: 'green', trend: trendArrow, lowerLimit: rvrGLowLmt, upperLimit: rvrGUpLmt, reportTime: lastReport, lvlChng: levelChange }
					}


					//----------Creating list of rivers that are too high-----------
					if (compareLevel > rvrGUpLmt) {
						running = false;
						let tooHiToRun = true;
						//seeing if gauge information has already been added to riverRunningInfo object
						if (riv in riverRunningInfo['tooHigh']) {
							//if gauges & info already exist, set the gauge counter to be the number of existing guages plus one   
							if ('gauges' in riverRunningInfo['tooHigh'][riv]) {
								gaugeCounter = Object.keys(riverRunningInfo['tooHigh'][riv]['gauges']).length + 1;
							}
						}
						//if no guage information exists yet, add new river info and blank object for gauges
						else {
							gaugeCounter = 1;
							riverTitle = rivers[riv]['name']
							if (rivers[riv].hasOwnProperty('url')) {
								url = rivers[riv]['url'];
							}
							else { url = "" }
							riverRunningInfo['tooHigh'][riv] = { name: riverTitle, webAddy: url }
							riverRunningInfo['tooHigh'][riv]['gauges'] = {}
						}
						let gaugeNum = "gauge" + gaugeCounter;
						let percentFull = 100 + "%";

						riverRunningInfo['tooHigh'][riv]['gauges'][gaugeNum] = { name: compareGauge, webAddy: url, isRunning: running, isHi: tooHiToRun, currentLvl: compareLevel, percentile: percentFull, flowColor: 'red', trend: trendArrow, lowerLimit: rvrGLowLmt, upperLimit: rvrGUpLmt, reportTime: lastReport, lvlChng: levelChange }
					}


					//----------Creating list of rivers that are too low-----------
					if (compareLevel < rvrGLowLmt) {
						running = false;
						let tooLowToRun = true;
						//seeing if gauge information has already been added to riverRunningInfo object
						if (riv in riverRunningInfo['tooLow']) {
							//if gauges & info already exist, set the gauge counter to be the number of existing guages plus one   
							if ('gauges' in riverRunningInfo['tooLow'][riv]) {
								gaugeCounter = Object.keys(riverRunningInfo['tooLow'][riv]['gauges']).length + 1;
							}
						}
						//if no guage information exists yet, add new river info and blank object for gauges
						else {
							gaugeCounter = 1;
							riverTitle = rivers[riv]['name']
							if (rivers[riv].hasOwnProperty('url')) {
								url = rivers[riv]['url'];
							}
							else { url = "" }
							riverRunningInfo['tooLow'][riv] = { name: riverTitle, webAddy: url }
							riverRunningInfo['tooLow'][riv]['gauges'] = {}
						}
						let gaugeNum = "gauge" + gaugeCounter;
						let percentFull = (compareLevel) / (rvrGLowLmt) * 100;
						percentFull = percentFull + "%";
						if (compareLevel < 0) { level = "Ice", trendArrow = "" }
						else { level = compareLevel }
						riverRunningInfo['tooLow'][riv]['gauges'][gaugeNum] = { name: compareGauge, webAddy: url, isRunning: running, isLow: tooLowToRun, currentLvl: level, percentile: percentFull, flowColor: '#ffa500', trend: trendArrow, lowerLimit: rvrGLowLmt, upperLimit: rvrGUpLmt, reportTime: lastReport, lvlChng: levelChange }
					}
				}
			}
		}
	}
}



//pushing station info from JSON to stationInfo object
let getStationNames = (promisedData) => {
	//each station is listed in the info object under nested objects info -> value - timeseries -- setting variable stations equal to that object
	let stations = promisedData['value']['timeSeries'];
	let numStations = stations.length;
	//for each station in info get the station name (variable "station") and current level (variable "level")
	for (let i = 0; i < numStations; i++) {
		let station = stations[i]['sourceInfo']['siteName'];
		let numGaugeReportings = Object.keys(stations[i]['values'][0]['value']).length;
		numGaugeReportings -= 1;
		let currentLevel = stations[i]['values'][0]['value'][numGaugeReportings]['value'];
		let priorLevel;
		let changePerHr;
		try {
			for (let j = 0; j < 20; j++) {
				let currentTime = stations[i]['values'][0]['value'][numGaugeReportings]['dateTime'];
				let priorTime = stations[i]['values'][0]['value'][numGaugeReportings - j]['dateTime'];
				currentTime = new Date(currentTime);
				priorTime = new Date(priorTime);
				let elapsed = currentTime - priorTime;
				if (elapsed >= 3600000) {
					priorLevel = stations[i]['values'][0]['value'][numGaugeReportings - j]['value']
					changePerHr = (currentLevel - priorLevel) / (elapsed / 3600000);
					changePerHr = Math.round(changePerHr);
					j = 20;
				}
			}
		}

		/*try {if(!stations[i]['values'][0]['value'][numGaugeReportings-5]['value']) {
			priorLevel = stations[i]['values'][0]['value'][numGaugeReportings-5]['value'];
		}}*/
		catch (error) { console.log(error) }
		let timeOfReport = stations[i]['values'][0]['value'][numGaugeReportings]['dateTime'];
		generateRiverInfo(station, currentLevel, priorLevel, promisedData, timeOfReport, changePerHr);
	}

	let orderedTooLow = Object.keys(riverRunningInfo['tooLow']).sort();
	let orderedTooHigh = Object.keys(riverRunningInfo['tooHigh']).sort();
	let orderedRunning = Object.keys(riverRunningInfo['running']).sort();
	let orderedNeedsInfo = Object.keys(riverRunningInfo['needsInfo']).sort();

	for (let i = 0; i < orderedTooLow.length; i++) {
		riverRunningInfoSorted['tooLow'][i] = riverRunningInfo['tooLow'][orderedTooLow[i]];
	}
	for (let i = 0; i < orderedTooHigh.length; i++) {
		riverRunningInfoSorted['tooHigh'][i] = riverRunningInfo['tooHigh'][orderedTooHigh[i]];
	}
	for (let i = 0; i < orderedRunning.length; i++) {
		riverRunningInfoSorted['running'][i] = riverRunningInfo['running'][orderedRunning[i]];
	}
	for (let i = 0; i < orderedNeedsInfo.length; i++) {
		riverRunningInfoSorted['needsInfo'][i] = riverRunningInfo['needsInfo'][orderedNeedsInfo[i]];
	}
	console.log(riverRunningInfoSorted);
	runHandlebars(riverRunningInfoSorted);
};

//calling getStationNames after promise (from fetch function) is resolved, passing in the resolved Value (json data);
infoObj.then(getStationNames)
	.then(loaderHide)
.then(showSnow);


console.log(infoObj);