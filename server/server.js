const express = require('express');
const app = express();
const axios = require('axios');

var server = {
    findPlantInfo(plantName, callback) {
        let url = `http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=${plantName}`;
        axios.get(url)
        .then((result) => callback(null, result.data.results))
        .catch((error) => {console.log(error)})
    }
    // findPlantInfo(plantName, callback) {
    //     let url = `http://www.tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=Mango`;
    //     axios.get(url)
    //     .then((result) => console.log(result))
    //     .catch((error) => {console.log(error)})
    // }
}

export default server;