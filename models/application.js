var config = require('../config');
var https = require("https");
var Logger = require('../common/logger');
var logger = Logger();
var mysql = require('mysql');

var pool = mysql.createPool({
  connectionLimit: 50,
  host: config.host,
  user: config.user,
  port: config.port,
  password: config.password,
  database: 'mytest'
});

var application = {
  test: function(callback) {
    var result = {};
    var data = "false";
    var errmsg = null;
    pool.query({
      sql: 'select * from users',
      timeout: 40000, // 40s 
    }, function(err, results, fields) {
      if (err) {
        errmsg = err;
      } else {
        logger.debug(results[0]);
        console.log(typeof results);
        data = results;
      }
      result.data = data;
      callback(errmsg, result);
    });
  },
  insert: function(callback) {
    var result = {};

    console.log('insert');
    var data = {
      userId: 'fs',
      userName: 'test'
    }
    pool.query({
        sql: 'INSERT INTO users SET ?',
        timeout: 40000, // 40s 
      }, data,
      function(err, results, fields) {
        var errmsg = null;
        var returnedData = {};
        if (err) {
          errmsg = err;
        } else {

        }
        callback(errmsg, result);
      }
    );
  }
}
module.exports = application;