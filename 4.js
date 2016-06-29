

var fs = require('fs');
var path = require('path');
//var arr = [];
fs.readdir(process.argv[2], function callback(err,list){
	for (var i=0; i<list.length; i++)
	{
		if (path.extname(list[i]).includes(process.argv[3]))
		{console.log (list[i])};
		//console.log(list[i]);
	}
	
	})
