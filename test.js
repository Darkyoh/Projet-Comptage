var http = require('http');
var url = require ('url');
var querystring = require('querystring');

var server = http.createServer(function(req, res) {

	res.writeHead(200, {"Content-type": "text/html"});
	var page = url.parse(req.url).pathname;
	console.log(page);
	if (page == '/')
	{
		res.write('Accueil');
	}
	else if (page == '/init')
	{
		res.write('Bienvenue sur la page d\'init');
	}
	res.end();
	
});

server.listen(8080);