var http = require('http');
var url = require ('url');
var fs = require('fs');
var array;
var buff = new Buffer(8192);

http.createServer(function(req, res) {
	res.writeHead(200, {"Content-type": "text/html"});
	var page = url.parse(req.url).pathname;
	if (page == '/')
	{
		if (req.method == 'POST')
		{
			var body = '';
			req.on('data', function (data) {
				body += data;
			});
			req.on('end', function (){
				console.log('toto' + body);
			});
		}
	}
	else if (page == '/init')
	{
		fs.open('toto.csv', 'r', function(err, fd){
		if (err){
			return(console.error(err));
		}
		fs.read(fd, buff, 0, 8192, 0, function(err, bytes){
			if(err){
				return (console.error(err));
			}
			console.log(bytes + " octets lus");
			array = buff.slice(0, bytes).toString().split('\n').map(function (elem) {
				return (elem.split(';'));
			});
			array[0][3] = "test";
			console.log(array);
		});	
	});
		res.write('Bienvenue sur la page d\'init\n');
		console.log(array);
	}
	res.end();
	
}).listen(8080);

//server.listen(8080);
