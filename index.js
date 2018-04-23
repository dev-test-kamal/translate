var googleTranslate = require('google-translate')('AIzaSyC3DdoYVntRxuMcSPQdZeinTSfPSPvMdR4');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://192.168.1.31:4000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
var port = process.env.PORT || 1337;

app.post('/translate', function(req, res) {
	var dataText = req.body.textData;
	switch(req.body.translateTo) {
		case ('English'):case ('english'):
		{var transTo = "en";
		break;}
		case ('Hindi'):case ('hindi'):
		{var transTo = "hi";
		break;}
		case ('Bengali'):case ('bengali'):
		{var transTo = "bn";
		break;}
		case ('Kannada'):case ('kannada'):
		{var transTo = "kn";
		break;}
		case ('Tamil'):case ('tamil'):
		{var transTo = "ta";
		break;}
		case ('Telugu'):case ('telugu'):
		{var transTo = "te";
		break;}
		case ('Malayalam'):case ('malayalam'):
		{var transTo = "ml";
		break;}
		case ('Punjabi'):case ('punjabi'):
		{var transTo = "pa";
		break;}
		default:
			transTo = "en";
	}
	console.log(transTo)
	googleTranslate.translate(dataText, transTo, function(err, translation) {
		console.log(transTo);
		if (err){res.end("Sorry Language Not Found! ")}
		console.log(translation.translatedText);
		res.end(translation.translatedText);
	});
});

app.listen(port, function(err) {
	if (err) throw err;
});
