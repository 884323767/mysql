var path = require('path');


var serverPort = process.env.WM_SERVER_PORT || '8070';
var corsOrigin = process.env.WM_SERVER_CORS || 11;
var logsDir = './logs' || '/data/logs/questionaire';
var appId = 'wx6861f713d7a41966';
var appSecret = '44b447f9fca36a7df69bdd5a95626805';

//mysql
var host = '10.9.8.46';
var user = 'llw';
var port = 3306;
var password = 'llw';

var config = {
    serverPort: serverPort,
    environment: 'test environment',
    corsOrigin: corsOrigin,
    logsDir: logsDir,
    appId: appId,
    appSecret: appSecret,
    host: host,
    user: user,
    port: port,
    password: password
};

module.exports = config;
