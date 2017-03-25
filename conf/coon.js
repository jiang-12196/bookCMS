/**
 * Created by jiang on 17-3-25.
 */

var mysql = require("mysql");
var conf = require("./db");

module.exports = mysql.createPool(conf.mysql);