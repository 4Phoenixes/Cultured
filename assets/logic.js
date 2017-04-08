   
// hotel API search and logi. 

	var APIURL = "http://api.hotwire.com/v1/tripstarter/hotel";
	var APIKey = "9utpjxqyqm6wd2r3bvtgw5mr";
	var CityInput = $("#cityInput").val();
	var queryURL =  "http://api.hotwire.com/v1/tripstarter/hotel" + CityInput + "9utpjxqyqm6wd2r3bvtgw5mr";
	
// sensing the on click function to run the ajax
	$(":submit").click(function(){
		$.ajax({
			url: queryURL,
			method: "GET"
		})

		.done(function(response) {
			var results = response.data;
			console.log(results);
			console.log(queryURL);
		})

	})

// performing the AJAX GET request
	$.ajax({
		url: queryURL,
		method: "GET"
	})

// after the query is done record results in a variable. 
	.done(function(response) {
		var results = response.data;
		console.log(results);
		console.log(queryURL);
	})
 


// 	function setup () {
// 	var queryURL = APIURL + CityInput + APIKey;
// 		function loadJSON (queryURL){
// 			$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 		}).done(function(response) {
// 			console.log(response)
// 	}

// 	// pulling the query items on clicking the submit
// 	$("#submit").on("click", function() {
// 	var queryURL = APIURL + CityInput + APIKey;

// 	// performing our AJAX GET request
// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	})

// 	//after the data comes back from the API
// 	.done(function(response) {
// 		//storing an array of results in the reults variable. 
// 		var results = response.data;
// 		consult.log(results);


// 	})

// })



// }