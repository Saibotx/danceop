
var mongoose = require('mongoose'),
Audition = mongoose.model('Audition');

const findAll = function(req, res){
	Audition.find({},function(err, results) {
    return res.send(results);
  });
}

const findById = function(req, res){
	var id = req.params.id;
  Audition.findOne({'_id':id}, function(err, result) {
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
	  Audition.create(
      {
        compName:'Company1', 
        compPhoto:'', 
        date:'09/20/2017', 
        audTime:'18:30:00', 
        desc:'come dance your butt off', 
        signInTime:'18:00:00'
      },{
        compName:'Company2', 
        compPhoto:'', 
        date:'09/20/2017', 
        audTime:'18:30:00', 
        desc:'come dance your butt off', 
        signInTime:'18:00:00'
      },{
        compName:'Company3', 
        compPhoto:'', 
        date:'09/20/2017', 
        audTime:'18:30:00', 
        desc:'come dance your butt off', 
        signInTime:'18:00:00'
      },
    function (err) {
	    if (err) return console.log(err);
	    return res.send(202);
		})
	}

const add = function(req, res){
	Audition.create(req.body, function (err, audition) {
    if (err) return console.log(err);
    return res.send(audition);
  });
}

const update = function(req, res){
	Audition.update({"_id":id}, req.body,
	function (err, numberAffected) {
	  if (err) return console.log(err);
	  return res.send(202);
	});

}

const del = function(){
	var id = req.params.id;
  Audition.remove({'_id':id},function(result) {
    return res.send(result);
  });

}


const deleteAll = function(req, res){

	Audition.find({},function(err, results) {
    var results = results;
    var i = 0;
    results.forEach(function(result) {
    	Audition.findOne({'_id':result._id},function(error,model){
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