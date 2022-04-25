var express = require('express');
var router = express.Router();

var bodyparser = require('body-parser')

var FS = require('fs');

var Csv = require('fast-csv');

const Path = '/home/harsh/Documents/Github_Personal/Node_JS_Basics/Form_to_Csv/public/Extra/File.csv';

const Flag = false;


(async function(err)
  {
	if(!FS.existsSync(Path))
	{
		FS.writeFileSync(Path, "name;post");
		console.log("Yes");
	}
	else
	{
		console.log("File Present");
	}

})();


var urlencodedParser = bodyparser.urlencoded({ extended: false })

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/index', urlencodedParser, function(req, res, next)
{
  console.log(req.body.name);
  console.log(req.body);


  FS.appendFile(Path, "\n" + req.body.name + ";" + req.body.post , function(err)
  {
	  if(err)
	  {
		  console.log(err);
	  }
	  else
	  {
		  console.log("File updated");
	  }
  });

//   (async function(err)
//   {
// 	if(!FS.existsSync(Path))
// 	{
// 		FS.mkdirSync(Path, function(err){
// 			if(err)
// 			{
// 				console.log("Error in Mkdir");
// 			}
// 			else
// 			{
// 				console.log("Exists ");
// 			}
// 		});
		
// 	}
// 	else
// 	{
// 		console.log("Failure");
// 	}

// 	console.log(req.body.name);
//   	console.log(req.body);
//   })();

  res.render('index', {});
})

module.exports = router;
