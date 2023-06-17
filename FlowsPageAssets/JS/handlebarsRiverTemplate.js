//handlebars testing -----------------------------------------------------------------------------------------------
export let runHandlebars = (riversInfoArray) => {
	let templateSource = document.getElementById('flowsTemplate').innerHTML;
	let template = Handlebars.compile(templateSource);
	
	const context = {riverArray: riversInfoArray};
	/* this creates format like such -- view HTML file "riverInfoDisplay.html" to see how this
		information is referenced and utilized
	[
		{
			name: "New Haven",
			gauges: { 
				gague1: {
				name: "New Haven Gauge",
				currentLvl: 600,
				isRunning: true
				},
				gague2: {
				name: "2nd New Haven Gauge",
				currentLvl: 10000,
				isRunning: true
				}
			}
		},
		{
			name: "Ridley",
			gauges: { 
				gague1: {
				name: "Ridley Gauge",
				currentLvl: 600,
				isRunning: true
				},
				gague2: {
				name: "2nd Ridley Gauge",
				currentLvl: 10000,
				isRunning: true
				}
			}	
		}
	];
	*/
	
	const compiledHTML = template(context);
	document.getElementById('handlebarsPopulatedInfo').innerHTML = compiledHTML;
	console.log(riversInfoArray);
};