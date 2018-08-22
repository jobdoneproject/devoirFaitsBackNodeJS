/**
 * Created by IO Software on 25/07/2018.
 */
var p = require('../package.json');
var version = p.version.split('.').shift();
module.exports = {
  restApiRoot: '/api' + (version > 0 ? '/v' + version : ''),
  host: 'localhost',
  port: 3000,
};
