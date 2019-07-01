/* CHARTS */

/* Traffic Line Chart */

/* Change class when buttons above traffic chart are clicked. */


var traffic = document.getElementById("trafficChart");

// Declare variables for traffic chart buttons
var hourly = $("#hourly-traffic");
var daily = $("#daily-traffic-button");
var weekly = $("#weekly-traffic");
var monthly = $("#monthly-traffic");
// declare array including all traffic chart buttons
var buttonArray = [hourly, daily, weekly, monthly];

// Show weekly chart by default/on page load
$(document).ready(function(){
	var trafficChart = new Chart(traffic, {
		type: 'line',
		data: {
			labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
			datasets: [{
				data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
				backgroundColor: [
					'#e2e3f6',
				],
				borderColor: [
					'rgba(115, 119, 191,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				}
			]

		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						max: 2500,
						min: 0,
						stepSize: 500,
					},
				}],
			},
			responsive: true,
			legend: {
				display: false
			}
		}
	});
});


// On click of a button
hourly.click(function() {
	// Remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// Add .active class
	hourly.addClass("active");

	var trafficChart = new Chart(traffic, {
		type: 'line',
		data: {
			labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
			datasets: [{
				data: [0, 5, 20, 25, 58, 74, 17, 10, 4, 150, 20, 18, 21],
				backgroundColor: [
					'#74b1bf',
				],
				borderColor: [
					'rgba(115, 119, 191,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				}
					]

		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						max: 2500,
						min: 0,
						stepSize: 500,
					},
				}],
			},
			responsive: true,
			legend: {
				display: false
			}
		}
	});

});

// on click of a button
daily.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	daily.addClass("active");

	var trafficChart = new Chart(traffic, {
		type: 'line',
		data: {
			labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
			datasets: [{
				data: [0, 50, 100, 250, 258, 745, 127, 100, 104, 150, 2000, 180, 210],
				backgroundColor: [
					'#81c98f',
				],
				borderColor: [
					'rgba(115, 119, 191,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				}
					]

		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						max: 2500,
						min: 0,
						stepSize: 500,
					},
				}],
			},
			responsive: true,
			legend: {
				display: false
			}
		}
	});

});

// Weekly Line Chart
weekly.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	weekly.addClass("active");

	var trafficChart = new Chart(traffic, {
		type: 'line',
		data: {
			labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
			datasets: [{
				data: [0, 500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
				backgroundColor: [
					'#e2e3f6',
				],
				borderColor: [
					'rgba(115, 119, 191,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				},

					   {//daily
					data: [0, 340, 100, 75, 1230, 150, 650, 1000, 100, 500, 200, 150, 200],
					label: "daily",
					backgroundColor: [
						'#e2e776',
					],
					borderColor: [
						'rgba(115, 121, 122,1)'
					],
					borderWidth: 1,
					lineTension: 0,
					pointBackgroundColor: 'white',
					pointBorderColor: '#7377bf',
					pointBorderWidth: 1.5,
					pointRadius: 5,
				}
			]

		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						max: 2500,
						min: 0,
						stepSize: 500,
					},
				}],
			},
			responsive: true,
			legend: {
				display: false
			}
		}
	});
});

// Monthly Line Chart
monthly.click(function() {
	// remove .active class from all buttons
	for (i = 0; i < buttonArray.length; i++) {
		buttonArray[i].removeClass("active");
	}

	// add .active class
	monthly.addClass("active");

	var trafficChart = new Chart(traffic, {
		type: 'line',
		data: {
			labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31", ""],
			datasets: [{
				data: [0, 1502, 2000, 1750, 2250, 1750, 1459, 1800, 1058, 1570, 2080, 1901, 2000],
				backgroundColor: [
					'#A15F7D',
				],
				borderColor: [
					'rgba(115, 119, 191,1)'
				],
				borderWidth: 1,
				lineTension: 0,
				pointBackgroundColor: 'white',
				pointBorderColor: '#7377bf',
				pointBorderWidth: 1.5,
				pointRadius: 5,
				}
					]

		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						max: 2500,
						min: 0,
						stepSize: 500,
					},
				}],
			},
			responsive: true,
			legend: {
				display: false
			}
		}
	});

}); //end monthly traffic line chart



/* Daily Traffic Bar Chart */
var dailyTraffic = document.getElementById("dailyTrafficChart");

var dailyTrafficChart = new Chart(dailyTraffic, {
	type: 'bar',
	data: {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [

			{
				type: 'bar',
				label: 'Desktop',
				data: [50, 75, 150, 100, 200, 175, 75],
				backgroundColor: 'rgba(115,119,191,1)',
				borderColor: 'rgba(115, 119, 191,1)',
				borderWidth: 1
			},

			{
				type: 'bar',
				label: 'Mobile',
				data: [154, 210, 137, 154, 543, 112, 242],
				backgroundColor: '#A15F7D'
			}

		]

	},
	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true,
					max: 250,
					min: 0,
					stepSize: 50,
				}
			}],
		},
		legend: {
			display: false,
		}
	}
});

/* Mobile Users Chart */

var mobileUsers = document.getElementById("mobileUsersChart");

var mobileUsersChart = new Chart(mobileUsers, {
	type: 'doughnut',
	data: {
		labels: [
			"Phones",
			"Tablets",
			"Desktop",
			"Other"
		],
		datasets: [
			{
				data: [50, 50, 260, 43],
				backgroundColor: [
					"#74b1bf",
					"#81c98f",
					"#7377bf",
					"#A15F7D"
				],
				hoverBackgroundColor: [
					"#5B98A6",
					"#68B076",
					"#5A5EA6",
					"#874563"
				]
			}]
		},
	options: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 15,
				fontSize: 14
			}
		}
	}
});

