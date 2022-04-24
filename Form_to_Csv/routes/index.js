var express = require('express');
var router = express.Router();

var bodyparser = require('body-parser')

var FS = require('fs');

const Path = 'Form_to_Csv/public/Extra/File.csv';


var urlencodedParser = bodyparser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/index', urlencodedParser, function(req, res, next)
{
  //console.log(req.body[name])

	// FS.stat(Path, function(err, stat)
	// {
		if (FS.existsSync(path)) {
			// path exists
			console.log("exists:", path);
		} 
		else 
		{
			console.log("DOES NOT exist:", path);
		}
			// if(err == null) 
			// {
			// 	console.log('File exists');
			// 	// FS.writeFileSync(Path, req.body.name + ";" + req.body.post + "\n");
			// 	var writeStream = FS.createWriteStream(Path);
			// 	writeStream.write(req.body.name + ";" + req.body.post + "\n");
			// 	writeStream.end();	

			// } 
			// else if(err.code == 'ENOENT') 
			// {
			// 	// file does not exist
			// 	// FS.writeFileSync(Path, "name;post\n");
			// 	// FS.writeFileSync(Path, req.body.name + ";" + req.body.post + "\n");
			// 	var writeStream = FS.createWriteStream(Path);
			// 	writeStream.write("name;post\n");
			// 	writeStream.write(req.body.name + ";" + req.body.post + "\n");
			// 	writeStream.end();

			// }
			// else
			// {
			// 	console.log('Some other error: ', err.code);
			// }
	// });
  console.log(req.body.name);
  console.log(req.body);

  // try 
  // {
  //   if (FS.existsSync(Path)) 
  //   {
	// 		FS.writeFileSync(Path, req.body.name + ";" + req.body.post);
  //   }
  // } catch(err) {
  //   console.error(err)
	// 	FS.writeFileSync(Path, "name;post");
	// 	FS.writeFileSync(Path, req.body.name + ";" + req.body.post);
  // }



  res.render('index', {});
})

module.exports = router;
