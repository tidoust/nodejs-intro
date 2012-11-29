var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/nodeintro', function (err, db) {
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

      db.close(function (err) {
        if (err) return console.error('WTF, no way to close the connection', err);
        console.log('That\'s all folks!');
      });
    });
  });
});