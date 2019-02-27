const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:SelectView Change', (evt) => {
    const countryInfo = evt.detail;
    this.display(countryInfo);
  });
};

module.exports = InfoView
