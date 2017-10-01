var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var MusicianSchema = new Schema({
  compName: String,
  date: String,
  time: String,
  desc: String,
  imgUrl: String,
});

mongoose.model('Musician', MusicianSchema);
