var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newDish = new Schema({
  name: {
  type: String,
  required: true,
  unique: true
},
description: {
  type: String,
  required: true
}
},{
  timestamp: true
});

var Dishes = mongoose.model('Dish', newDish);

module.exports = Dishes;
