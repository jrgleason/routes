var environment = process.env.NODE_ENV || 'development';
switch (environment) {
  case 'prod':
  case 'production':
    module.exports = require('./conf/webpack.prod')();
    break;
  // case 'test':
  // case 'testing':
  //   module.exports = require('./webpack.test.js')();
  //   break;
  case 'dev':
  case 'development':
    module.exports = require('./conf/webpack.dev')();
    break;
  default:
    module.exports = require('./conf/webpack.common')();
}

