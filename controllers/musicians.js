
var mongoose = require('mongoose'),
Musician = mongoose.model('Musician');

const findAll = function(req, res){
	Musician.find({},function(err, results) {
    return res.send(results);
  });
}

const findById = function(req, res){
	var id = req.params.id;
  Musician.findOne({'_id':id}, function(err, result) {
  	if (!result){
  		return res.send("no results");
  	}

  	if (err) {
  		console.log('error');
  	}
    return res.send(result);

  });
}

const imp = function(req, res){
	  Musician.create(
    { "name": "Ben", "band": "DJ Code Red", "instrument": "Reason" },
    { "name": "Mike D.","band": "Kingston Kats", "instrument": "drums" },
    { "name": "Eric", "band": "Eric", "instrument": "piano" },
    { "name": "Paul", "band": "The Eyeliner", "instrument": "guitar" }, 
    function (err) {
	    if (err) return console.log(err);
	    return res.send(202);
		})
	}

const add = function(req, res){
	Musician.create(req.body, function (err, musician) {
    if (err) return console.log(err);
    return res.send(musician);
  });
}

const update = function(req, res){
	Musician.update({"_id":id}, req.body,
	function (err, numberAffected) {
	  if (err) return console.log(err);
	  console.log('Updated %d musicians', numberAffected);
	  return res.send(202);
	});

}

const del = function(){
	var id = req.params.id;
  Musician.remove({'_id':id},function(result) {
    return res.send(result);
  });

}


const deleteAll = function(req, res){

	Musician.find({},function(err, results) {
    var results = results;
    var i = 0;
    results.forEach(function(result) {
    	Musician.findOne({'_id':result._id},function(error,model){
    		model.remove();
    	});
    	i++;
    });
    return res.send('we\'ve deleted ' + i + ' results');
  });
}


module.exports = {
	findAll,
	findById,
	add,
	update,
	del,
	imp,
	deleteAll
}