const express = require("express");
const ship = express.Router();
const pool = require("./connection");
var shipments = [];
require('dotenv').config();
const upper = process.env.ALPHA_ACCESS;
const lower = process.env.BETA_ACCESS;
const encoded = upper + ":" + lower;
const axios = require('axios').default;

// process.env.VARNAME
const shipBaseUrl = "https://ssapi.shipstation.com/";

axios.get(`${shipBaseUrl}orders?storeId=231686`, {
 auth: {
   username: upper,
   password: lower
 }
}).then((response) => {
    // console.log(response.data);
    // console.log(response);
    shipments = response.data;
    console.log(response.data);
    return response.data;
}).catch(error => {
    console.log(error);
})

ship.get('/', (req,res) => {
    return res.json(shipments);
})

module.exports = ship;
