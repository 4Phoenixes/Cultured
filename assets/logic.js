   
// hotel API search and logi. 

	var APIURL = "https://cors-anywhere.herokuapp.com/http://api.hotwire.com/v1/tripstarter/hotel";
	var APIKey = "9utpjxqyqm6wd2r3bvtgw5mr";
	
// sensing the on click function to run the ajax
	$(":submit").click(function(){
		var CityInput = $("#CityInput").val();
		var DateIn = $("#dateselector1").val();
		var DateOut = $("#dateselector2").val();

		var date1 = new Date(DateIn).toLocaleDateString();
		var date2 = new Date(DateOut).toLocaleDateString();

		var queryURL =  "http://hotwire.herokuapp.com/v1/search/hotel?apikey=9utpjxqyqm6wd2r3bvtgw5mr&dest="
		 + CityInput + "&rooms=1&adults=1&children=0&startdate=" + date1 + "&enddate=" + date2 + "&format=json";
		
			$.ajax({
			url: queryURL,
			// headers: { 'X-Requested-With': '*', 'Origin': ""},
			method: "GET"
			})

		.done(function(response) {
			var results = response;
			console.log(date1);
			console.log(date2)
			console.log(JSON.parse(results));
		})

	})

// performing the AJAX GET request
// 	$.ajax({
// 		url: queryURL,
// 		method: "GET"
// 	})

// // after the query is done record results in a variable. 
// 	.done(function(response) {
// 		var results = response.data;
// 		console.log(results);
// 		console.log(queryURL);
// 	})
 


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