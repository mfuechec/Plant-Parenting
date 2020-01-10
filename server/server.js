const axios = require('axios');
// const db = require('../db/db.js');

var server = {
    findPlantInfo(plantName, callback) {
        let url = `http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=${plantName}`;
        axios.get(url)
        .then((result) => callback(null, result.data.results))
        .catch((error) => {console.log(error)})
    },

    verifyLogin(userName, callback) {
        // db.checkLogin(userName, (err, res) => {
        //     if (err) {
        //         callback(err, null)
        //     } else {
        //         callback(null, result)
        //     }
        // })
    }
}

export default server;

/* ----- Findable Plants -----
Almond
Betelnut
Bora Berry
Calamondin
Cassava
Chickpea
Clove
Coriander
Custard Apple
Dill
Dragon Fruit
Durian
Fenugreek
Gisuri
Gunda
Jackfruit
Jambolan
Java Apple
Kantola
Karela
Lentil
Lime
Longan
Lychee
Macadamia
Millet
Mustard
Neem
Nutmeg
Olive
Oregano
Passionfruit
Physalis
Prickly Pear
Rambutan
Rosemary
Sittu
Star Anise
Strawberry Guava
Sugar Apple
Tamarind
Tindora
Tulsi
Vanilla
Zalacca
*/