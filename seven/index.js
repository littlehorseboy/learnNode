const mongodb = require('mongodb');

const mongoClient = mongodb.MongoClient;

mongoClient.connect('mongodb://localhost/test', (err, db) => {
    db.collection('contact', (err, collection) => {
        collection.find({}, (err, rows) => {
            for (let index in rows) {
                console.log(rows[index]);
            }
        });
    });
});
