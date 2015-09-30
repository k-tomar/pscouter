require("../model/model.js");

var mongoose = require("mongoose");
var usermodel = mongoose.model('user')

exports.get_users = function (req,res)
{
	usermodel.find(function(err, result)
	{
		if(err)
		{
			console.log(err);
			res.status(500).jsonp(err);
		}
		else
		{
			console.log(result);
			res.jsonp(result);
		}
	});
};

exports.update_users = function (req,res)
{
	console.log(req.body);
	var condition = {
		_id: req.body._id
	};
	console.log("condition", condition);
	delete req.body._id;
	usermodel.update(condition,req.body,function(err, result)
	{
		if(err)
		{
			res.status(500).jsonp(err);
		}
		else
		{
			console.log(result);
			res.jsonp(result);
		}
	});
};
