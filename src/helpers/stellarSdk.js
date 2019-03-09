const baseUrl = require('../config.json').horizonServerUrl;
let server;

module.exports = {
  getServer: () => {
    if (server) return server;
  },
  initServer: StellarSdk => {
    server = new StellarSdk.Server(baseUrl);
    return server;
  }
};
