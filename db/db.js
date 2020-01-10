const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';
const dbName = 'plants';
let db;

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log(err)
    } else {
        db = client.db(dbName)
        console.log('Connected to MongoDB')
    }
})

var checkLogin = function(userName, callback) {
    db.collection('users').findOne({ userName: userName }, (err, res) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, res)
        }
    })
}

module.exports.checkLogin = checkLogin;