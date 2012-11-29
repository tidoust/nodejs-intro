var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://localhost:27017/nodeintro');

var userSchema = mongoose.Schema({
  nick: String,
  age: { type: Number, required: true }
});

userSchema.methods.sayHi = function () {
  console.log(this.nick + ' says "Hi!"');
};

var User = db.model('User', userSchema);

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  var user = new User({
    nick: 'tidoust',
    firstName: 'Francois',
    lastName: 'Daoust'
  });

  user.save(function (err, user) {
    if (err) return console.error('Oh no!');
    user.sayHi();

    console.log(user);

    db.close();
  });
});