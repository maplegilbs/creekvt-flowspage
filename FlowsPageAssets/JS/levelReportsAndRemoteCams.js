function loaderHide() {
	document.getElementById("camsLoader").style.display = "none";
	document.getElementById("camsLoading").style.display = "none";
};


async function getCamImages() {
	let middImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=middlebury&quantity=1000")
	let middImagesJSON = await middImages.json();
	middImagesJSON.reverse();
	let bbImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=bigbranch&quantity=1000")
	let bbImagesJSON = await bbImages.json();
	bbImagesJSON.reverse();
	let camsContent =
		`<p>These images are gathered from cell-enabled trail cams set to take images every 2hrs between 7am and 5pm</p>  
		<p>Issues with these images?  Contact us at <a href='mailto:gopaddling@creekvt.com?subject=River Cameras'> gopaddling@creekvt.com</a></p>
		<br>
		<h4>Middlebury River</h4>
		<h5>Near Grist Mill Road Bridge, ½ mile below the takeout</h5>
		<br/>
		<details>
		<summary>Click For Reference Images</summary>
		<!--<div class='camImages'>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddLow.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddLow.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddMedium.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddMedium.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddHigh.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/MiddHigh.jpg'></a></div>
		</div>
		<p>These references are for levels to be expected in the Gorge Proper.  <br/>1)  The rock should have at least some water on top and the surrounding rocks to be submerged for a minimum, if the rock is not visible it will be high.<br/> 2)  This rock should have at least some water all the way over it for a minimum.  Once there is no pillow on the upstream side it is high.  <br/>3)  Look for the smaller rocks to be just barely sitting in water for a minimum.  If they are submerged it is high.</p>
		<p class='disclaimer'>**The Middlebury River is a dangerous river that is extremely level dependant.  The rocks in these images shift regularly thus correlating live images to these as a level reference should be done with extreme caution.
		For a first trip down it is highly recommended you have somebody knowledgeable with the river show you down**</p>-->
				<br/><br/>
				<p>Overnight on July 14th into July 15th 2023 the town of Ripton experienced flash flooding on a scale comparable if not worse than that seen during Irene.  As a result the Middlebury River changed significantly, including the gauges rocks used to judge level at this remote camera.  New reference images are currently being established and will be uploaded soon.</p>

		</details>
		<br>
		<h5>Most Recent Images</h5>
		<div class='camImages'>
			<div class='camImage'><a href=${middImagesJSON[0]} target='_blank'><img width='100%' src=${middImagesJSON[0]}></a></div>
			<div class='camImage'><a href=${middImagesJSON[1]} target='_blank'><img width='100%' src=${middImagesJSON[1]}></a></div>
			<div class='camImage'><a href=${middImagesJSON[2]} target='_blank'><img width='100%' src=${middImagesJSON[2]}></a></div>
			<div class='camImage'><a href=${middImagesJSON[3]} target='_blank'><img width='100%' src=${middImagesJSON[3]}></a></div>
		</div>
		<hr>
		<br>
		<h4>Big Branch Of Otter Creek</h4>
		<h5> ½ mile below the takeout bridge</h5>
		<br/>
		<details>
		<summary>Click For Reference Images</summary>
		<div class='camImages'>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLow.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLow.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLowRunnable.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBLowRunnable.jpg'></a></div>
			<div class='refImage'><a href='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBMed.jpg' target='_blank'><img src='./FlowsPageAssets/Images/RiverCamsReferenceImages/BBMed.jpg'></a></div>
		</div>
		<p>This camera was installed on September 3, 2021 - further correlations and details to come.</p>
		</details>
		<br>
		<h5>Most Recent Images</h5>
		<div class='camImages'>
			<div class='camImage'><a href=${bbImagesJSON[0]} target='_blank'><img width='100%' src=${bbImagesJSON[0]}></a></div>
			<div class='camImage'><a href=${bbImagesJSON[1]} target='_blank'><img width='100%' src=${bbImagesJSON[1]}></a></div>
			<div class='camImage'><a href=${bbImagesJSON[2]} target='_blank'><img width='100%' src=${bbImagesJSON[2]}></a></div>
			<div class='camImage'><a href=${bbImagesJSON[3]} target='_blank'><img width='100%' src=${bbImagesJSON[3]}></a></div>
		</div>
		<br>`;
	document.getElementById("riverCams").innerHTML = camsContent;
	loaderHide();
}

getCamImages();


async function getLevelReports() {
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
recentReports.then(response => {
	document.getElementById("levelReports").innerHTML = response;
});