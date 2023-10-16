function loaderHide() {
	document.getElementById("camsLoader").style.display = "none";
	document.getElementById("camsLoading").style.display = "none";
};


async function getCamImages(){
    let middImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=middlebury&quantity=1000")
    let middImagesJSON = await middImages.json();
    middImagesJSON.reverse();
    
    let newHavenImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=newhaven&quantity=1000")
    let newHavenImagesJSON = await newHavenImages.json();
    newHavenImagesJSON.reverse();
    
    let bbImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=bigbranch&quantity=1000")
    let bbImagesJSON = await bbImages.json();
    bbImagesJSON.reverse();
    
    let camsContent = 
`<p>These images are gathered from cell-enabled trail cams set to take images every 2hrs between 7am and 5pm</p>  
		<p>Issues with these images?  Contact us at <a href='mailto:gopaddling@creekvt.com?subject=River Cameras'> gopaddling@creekvt.com</a></p>
		<br>
		<h4>New Haven River</h4>
		<h5>Below Route 116 Bridge, 100 yrds below the ledges takeout</h5>
		<br/>
		<details>
		<summary>Click For Reference Images</summary>
		<br/>
		<div class='camImages'>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_0ft10in.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_0ft10in.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_1ft2in.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_1ft2in.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_1ft5in.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_1ft5in.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_1ft10in.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_1ft10in.jpg'></a></div>
				<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_2ft0in.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/NewHavenReferenceImages_2ft0in.jpg'></a></div>
		</div>
		
				<p class='disclaimer'>Ledges Level reference guide
				<br/>
				 8" Minimum
				 <br/>
				 9" - 11" Low
				 <br/>
				 1' - 1'2" Medium Low
				 <br/>
				 1'3" - 1'5" Medium
				 <br/>
				 1'6" - 1'8" Medium High
				 <br/>
				 1'9" - 1'11" High
				 <br/>
				 2'+ Very High
				</p>

		</details>
		<br>
		<h5>Most Recent Images</h5>
		<div class='camImages'>
			<div class='camImage'>
			  <a href=${newHavenImagesJSON[0]} target='_blank'>
			    <!--<div class="imageOverlay"></div>-->
			    <img width='100%' src=${newHavenImagesJSON[0]}>
			  </a>
			</div>
			<div class='camImage'>
			  <a href=${newHavenImagesJSON[1]} target='_blank'>
			    <!--<div class="imageOverlay"></div>-->
			    <img width='100%' src=${newHavenImagesJSON[1]}>
			  </a>
			</div>
		</div>
		<hr>
		<br>
		<h4>Middlebury River</h4>
		<h5>Near Grist Mill Road Bridge, ½ mile below the takeout</h5>
		<br/>
		<details>
		<summary>Click For Reference Images</summary>
		<br/><br/>
		<p class='disclaimer'>**The Middlebury River is a dangerous river that is extremely level dependant.  The rocks in these images shift regularly thus correlating live images to these as a level reference should be done with extreme caution.
		For a first trip down it is highly recommended you have somebody knowledgeable with the river show you down**
		</p>

		<div class='camImages'>
			<!--<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddleburyGorgeHighLowerMedium.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddleburyGorgeHighLowerMedium.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddMedium.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddMedium.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddHigh.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddHigh.jpg'></a></div>-->
		</div>
		
				<p class='disclaimer'>Overnight on July 14th into July 15th 2023 the town of Ripton experienced flash flooding on a scale comparable if not worse than that seen during Irene.  This historic event repeated itself about a month later.  As a result the Middlebury River has changed significantly, including the gauges rocks used to judge level at this remote camera.  New reference images are continuing to being established and will be uploaded soon.
				</p>

		</details>
		<br>
		<h5>Most Recent Images</h5>
		<div class='camImages' style="position: relative">
		
		<!--<div style="width: 100%; height: 100%; background-color: rgba(255,255,255,.7); position: absolute; display: flex; justify-content: center; align-items: center; z-index: 100;">
<h2 style="border: 2px solid black; background-color: white; padding: 1rem; text-align: center">Middlebury Camera Temporarily Offline - Check Back Soon</h2>
		</div>-->
		
			<div class='camImage'><a href=${middImagesJSON[0]} target='_blank'><img width='100%' src=${middImagesJSON[0]}></a></div>
			<div class='camImage'><a href=${middImagesJSON[1]} target='_blank'><img width='100%' src=${middImagesJSON[1]}></a></div>
			<!--<div class='camImage'><a href=${middImagesJSON[2]} target='_blank'><img width='100%' src=${middImagesJSON[2]}></a></div>
			<div class='camImage'><a href=${middImagesJSON[3]} target='_blank'><img width='100%' src=${middImagesJSON[3]}></a></div>-->
		</div>
		<hr>
		<br>
		<h4>Big Branch Of Otter Creek</h4>
		<h5> Camera located on the run!  Installed and hosted by Justin Crannell.  Huge thanks to his work - he is <em>the</em> local guide for the Big Branch.</h5>
		<p>Check out his write-up here <a href="https://creekvt.com/riverguide/thebigbranch/">guide to the Big Branch</a></p>
		<br/>
		<details>
		<summary>Click For Reference Images</summary>
		<!--<div class='camImages'>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLow.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLow.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLowRunnable.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLowRunnable.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBMed.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBMed.jpg'></a></div>
		</div>-->
		<br/><br/>
		<p>This camera was installed Mid-Summer 2023 - reference images to come</p>
		</details>
		<br>
		<h5>Most Recent Images</h5>
		<div class='camImages' style="position: relative">
		
		<!--<div style="width: 100%; height: 100%; background-color: rgba(255,255,255,.7); position: absolute; display: flex; justify-content: center; align-items: center; z-index: 100;">
<h2 style="border: 2px solid black; background-color: white; padding: 1rem; text-align: center">Big Branch Camera Temporarily Offline - Check Back Soon</h2>
		</div>-->
		
			<div class='camImage'><a href=${bbImagesJSON[0]} target='_blank'><img width='100%' src=${bbImagesJSON[0]}></a></div>
			<div class='camImage'><a href=${bbImagesJSON[1]} target='_blank'><img width='100%' src=${bbImagesJSON[1]}></a></div>
			<!--<div class='camImage'><a href=${bbImagesJSON[2]} target='_blank'><img width='100%' src=${bbImagesJSON[2]}></a></div>
			<div class='camImage'><a href=${bbImagesJSON[3]} target='_blank'><img width='100%' src=${bbImagesJSON[3]}></a></div>-->
		</div>
		<br>`;
document.getElementById("riverCams").innerHTML = camsContent;
loaderHide();
}

getCamImages();


async function getLevelReports () {
	let levelReports = await fetch("./FlowsPageAssets/PHP/levelReports.php");
	if (levelReports.status == 200) {
		levelReports = levelReports.text();
		return levelReports;
	}
	else {
		return "<p>Recent Level Reports Unavailable At This Time</p>";
	}
}

let recentReports = getLevelReports();
recentReports.then( response => {
	document.getElementById("levelReports").innerHTML = response;
});