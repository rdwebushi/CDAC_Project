// configering the path and port number given in JSON file

var env = process.env.NODE_ENV || 'development';    // check env.
var config = require('./config.json');      // fetch env. config
var envConfig = config[env];

// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);