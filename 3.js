var fs = require('fs');
var arr = fs.readFileSync(process.argv[2]).toString();
//console.log (arr);
var arr1 = arr.split('');
var total = 0;
for (var i = 0; i<arr1.length; i++)
{
	if (arr1[i] == "\n"){total++};	
}

console.log (total);
