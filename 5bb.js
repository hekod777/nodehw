 var filter = require('./5aa.js');
 var dir  = process.argv[2];
 var extname = process.argv[3];

 var arr = filter(dir, extname, function(err, list){
    if(err){
        console.log("ERROR");
    }
	else
	{
		for (i=0; i<list.length; i++)
		{
			console.log (list[i]);
		}
	}
    
 });
