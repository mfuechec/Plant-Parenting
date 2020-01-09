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

module.exports.checkLogin = (userName, callback) => {
    db.collection('users').findOne({ userName: userName }, (err, res) => {
        if (err) {
            callback(err, null)
        } else {
            callback(null, err)
        }
    })
}

module.exports.createNewUser = () => {

}

module.exports.addPlants = () => {

}

module.exports.removePlants = () => {

}