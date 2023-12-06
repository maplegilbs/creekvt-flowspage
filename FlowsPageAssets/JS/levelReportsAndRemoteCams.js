async function getCamImages() {

	function loaderHide() {
		document.getElementById("camsLoader").style.display = "none";
		document.getElementById("camsLoading").style.display = "none";
		document.querySelectorAll(".riverCamSection").forEach(section => {
			section.style.visibility = "visible";
		})
	};

	let middImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=middlebury&quantity=1000")
	let middImagesJSON = await middImages.json();
	middImagesJSON.reverse();
	let middImgs = document.querySelectorAll("#middcam .camImage img")
	let middAnchors = document.querySelectorAll("#middcam .camImage a")
	middImgs.forEach((img, i) => {
		middImgs[i].src = middImagesJSON[i];
		middAnchors[i].href = middImagesJSON[i];
	})


	let newHavenImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=newhaven&quantity=1000")
	let newHavenImagesJSON = await newHavenImages.json();
	newHavenImagesJSON.reverse();
	let newHavenImgs = document.querySelectorAll("#newhavencam .camImage img")
	let newHavenAnchors = document.querySelectorAll("#newhavencam .camImage a")
	newHavenImgs.forEach((img, i) => {
		newHavenImgs[i].src = newHavenImagesJSON[i];
		newHavenAnchors[i].href = newHavenImagesJSON[i];
	})

	let bbImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=bigbranch&quantity=1000")
	let bbImagesJSON = await bbImages.json();
	bbImagesJSON.reverse();
	let bbImgs = document.querySelectorAll("#bbcam .camImage img")
	let bbAnchors = document.querySelectorAll("#bbcam .camImage a")
	bbImgs.forEach((img, i) => {
		bbImgs[i].src = bbImagesJSON[i];
		bbAnchors[i].href = bbImagesJSON[i];
	})

	let nblImages = await fetch("https://river-cams-photo-fetch.herokuapp.com/photos?riverName=northbranchlamoille&quantity=1000")
	let nblImagesJSON = await nblImages.json();
	nblImagesJSON.reverse();
	let nblImgs = document.querySelectorAll("#nblcam .camImage img")
	let nblAnchors = document.querySelectorAll("#nblcam .camImage a")
	nblImgs.forEach((img, i) => {
		nblImgs[i].src = nblImagesJSON[i];
		nblAnchors[i].href = nblImagesJSON[i];
	})

	loaderHide();


	//New Haven Slider Controls
	let newHavenOpacitySlider = document.getElementById("newHavenOpacitySlider");
	let newHavenImageOverlays = document.querySelectorAll(".newHavenOverlay");
	let newHavenRadioContainer = document.querySelector(".newHavenRadios");
	newHavenRadioContainer.addEventListener("click", e => {
		newHavenImageOverlays.forEach(imageOverlay => {
			imageOverlay.classList = ['overlay']
			imageOverlay.classList.add(e.target.value)
		})
	})
	newHavenOpacitySlider.addEventListener("input", (e) => {
		newHavenImageOverlays.forEach(imageOverlay => {
			imageOverlay.style.opacity = e.target.value
		})
	})

	//Middlebury Slider Controls
	let middOpacitySlider = document.getElementById("middOpacitySlider");
	let middImageOverlays = document.querySelectorAll(".middOverlay");
	let middRadioContainer = document.querySelector(".middRadios");
	middRadioContainer.addEventListener("click", e => {
		middImageOverlays.forEach(imageOverlay => {
			imageOverlay.classList = ['overlay']
			imageOverlay.classList.add(e.target.value)
		})
	})
	middOpacitySlider.addEventListener("input", (e) => {
		middImageOverlays.forEach(imageOverlay => {
			imageOverlay.style.opacity = e.target.value
		})
	})

	//Big Branch Slider Controls
	let bbOpacitySlider = document.getElementById("bbOpacitySlider");
	let bbImageOverlays = document.querySelectorAll(".bbOverlay");
	let bbRadioContainer = document.querySelector(".bbRadios");
	bbRadioContainer.addEventListener("click", e => {
		bbImageOverlays.forEach(imageOverlay => {
			imageOverlay.classList = ['overlay']
			imageOverlay.classList.add(e.target.value)
		})
	})
	bbOpacitySlider.addEventListener("input", (e) => {
		bbImageOverlays.forEach(imageOverlay => {
			imageOverlay.style.opacity = e.target.value
		})
	})

	//NBL Slider Controls
	let nblOpacitySlider = document.getElementById("nblOpacitySlider");
	let nblImageOverlays = document.querySelectorAll(".nblOverlay");
	let nblRadioContainer = document.querySelector(".nblRadios");
	nblRadioContainer.addEventListener("click", e => {
		nblImageOverlays.forEach(imageOverlay => {
			imageOverlay.classList = ['overlay']
			imageOverlay.classList.add(e.target.value)
		})
	})
	nblOpacitySlider.addEventListener("input", (e) => {
		nblImageOverlays.forEach(imageOverlay => {
			imageOverlay.style.opacity = e.target.value
		})
	})

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