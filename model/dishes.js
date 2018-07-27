var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
  rating:{
    type: Number,
    max: 5,
    min: 1,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  }
},{
  timestamp: true
});


var newDish = new Schema({
  name: {
  type: String,
  required: true,
  unique: true
},
description: {
  type: String,
  required: true
},
comments: [commentSchema]
},{
  timestamp: true
});

var Dishes = mongoose.model('Dish', newDish);

module.exports = Dishes;
