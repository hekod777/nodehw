var fs = require('fs');
var path = require('path');
module.exports = function (dir, extname, callback){
	
	
    fs.readdir(dir, function (err, list){
        if(err){
            return callback(err);
        }
        else{
			var res = [];
           for(var i = 0; i < list.length; i++){
                    var ext = "."+extname;
                    if (list[i].substr(-1 * ext.length, ext.length) === ext){
                        res.push(list[i]);
                    }        
                }
					callback(null, res);
        }
    });

}