var mongoose = require('mongoose');

var Dishes = require('./model/dishes');

var url = 'mongodb://localhost:27017/rest';
var connect = mongoose.connect(url);

connect.then((db) => {
  console.log('Connected Succesfully.');

  var newDish = Dishes({
    name: 'cho',
    description: 'HE is chomu.'
  });

  newDish.save()
  .then((dish) => {
    console.log(dish);

    return Dishes.find({});
  })
  .then((dish) => {
    console.log(dish);

    return Dishes.remove({});
  })
  .then(() => {
    return mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
});
