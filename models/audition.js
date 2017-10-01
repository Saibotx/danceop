var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Auditions = new Schema({
  compName: String,
  compPhoto:String,
  date: String,
  audTime: String,
  desc: String,
  signInTime:String

});

mongoose.model('Audition', Auditions);
