var mongoose = require('mongoose');

var Dishes = require('./model/dishes');

var url = 'mongodb://localhost:27017/rest';
var connect = mongoose.connect(url);

connect.then((db) => {

      Dishes.create({
        name: 'mf',
        description: "Cool Guy."
      })
      .then((dish) => {
        console.log(dish);

        return Dishes.findByIdAndUpdate(dish._id, {
          $set: {description: 'Success will follow you.'},
        },
        {
            new: true
          }
        ).exec()
      })
      .then((dish) => {
        console.log(dish);

        dish.comments.push({
          rating: 3,
          comment: 'Nice!',
          author: 'skj'
        });

        return dish.save();
      })
      .then(() => {
        return mongoose.connection.close();
      })
      .catch((err) => {
        console.log(err);
      });
});
