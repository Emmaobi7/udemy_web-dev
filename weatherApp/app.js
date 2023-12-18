const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: true}))
app.get("/", function(req, res) {
	res.sendFile(__dirname + '/index.html')
})

app.post("/", function(req, res) {

	const apikey = '29e2f6448a4923d54e67e7e35589b3f5'
	const city = req.body.cityName
	const url = "https://api.openweathermap.org/data/2.5/weather?appid="+ apikey +"&q="+ city +"&units=metric";
	https.get(url, function(response) {
		console.log(response.statusCode);

		response.on('data', function(data) {
			const wData = JSON.parse(data)
			const temp = wData.main.temp
			const des = wData.weather[0].description
			const img = wData.weather[0].icon
			const imageURL = 'https://openweathermap.org/img/wn/' + img + '@2x.png'
			res.write('<p>The weather is currently ' + des + '</p>')
			res.write("<h1>The temperature in " + city + " is " + temp + " degrees celsius.</h1>")
			res.write("<img src="+ imageURL +" >")
			res.send()
		})
	})

})

app.listen(3000, function() {
	console.log('server started at port 3000.')
})
