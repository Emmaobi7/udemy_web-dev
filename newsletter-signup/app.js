const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res) {
	res.sendFile(__dirname + '/signup.html')
})

app.post("/", function(req, res) {
	let name = req.body.name;
	let email = req.body.email
	console.log(name);
	console.log(email);

	res.send('Thank you');
})

app.listen(3000, function() {
	console.log("server listening on port 3000")
})


//dfc533fc63710fcf0a3a93a4a7cdbd36-us11
