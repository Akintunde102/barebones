const StellarSdk = require('stellar-sdk');
const Boom = require('boom');
const config = require('config');

const { logger: Logger } = require('./lib/logger');

module.exports = {
  initServer: async () => {
    try {
      global.StellarServer = new StellarSdk.Server(config.get('horizonServerUrl'));
      Logger.info('Connected to Horizon');

      global.StellarSdk = StellarSdk;
    } catch (error) {
      Logger.error(error);
      throw error;
    }
  }
};
