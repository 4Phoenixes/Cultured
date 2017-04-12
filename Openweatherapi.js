	var API = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}"
	var APIKEY= "a8c578ac927f9cdeb7aa1a881bfa1f78"

	$.ajax({
	      url: "api.openweathermap.org",
	      method: "GET"
	    }).done(function(response) {
	      console.log(response);
	    });

</body>
</html>

