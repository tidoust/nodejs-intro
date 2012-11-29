var MongoClient = require('mongodb').MongoClient;

var mongodbURI = process.env.MONGOHQ_URL ||
  'mongodb://127.0.0.1:27017/nodeintro';

MongoClient.connect(mongodbURI, function (err, db) {
  if (err) {
    console.error('Oh no, connection troubles!', err);
    return;
  }

  db.collection('testcol').insert({
    nick: 'tidoust',
    firstName: 'Francois',
    lastName: 'Daoust'
  }, function (err, result) {
    if (err) {
      console.error('Insertion failed', err);
      process.exit(1);
    }
    console.log('Inserted', result);

    db.collection('testcol').findOne({
      nick: 'tidoust'
    }, function (err, result) {
      if (err) {
        console.error('Could not read DB', err);
        process.exit(1);
      }
      console.log('Found', result);
    });
  });
});