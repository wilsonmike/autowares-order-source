const express = require("express");
const ship = express.Router();
const pool = require("./connection");
var shipments = [];
require('dotenv').config();
const upper = process.env.ALPHA_ACCESS;
const lower = process.env.BETA_ACCESS;
const encoded = btoa(upper + ":" + lower);

// process.env.VARNAME
const shipBaseUrl = "https://ssapi.shipstation.com/";

axios.get(`${this.shipBaseUrl}`, {
 headers: {
   Authorization: 'Basic ' + encoded //the token is a variable which holds the token
 }
})

module.exports = ship;
