const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'startbootstrap-shop-item-gh-pages',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

