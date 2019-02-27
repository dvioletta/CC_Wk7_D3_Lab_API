const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function() {
  PubSub.subscribe('Selected Country ready', (evt) => {
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
