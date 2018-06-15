'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

const ips = require('./getIp');

let API_ROOT =  ips[0] ;
console.log(ips);
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"http://' + API_ROOT + ':8080"'
})
