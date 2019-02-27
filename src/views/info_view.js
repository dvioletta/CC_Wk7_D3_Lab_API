const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:SelectView Change', (evt) => {
    const countryInfo = evt.detail;
    console.log(countryInfo);
    this.display(countryInfo);
  });
};

InfoView.prototype.display = function(country) {
  const infoHeading = document.createElement('h1');
  infoHeading.textContent = `${country.name}`

  this.container.appendChild(infoHeading)

}

module.exports = InfoView;
