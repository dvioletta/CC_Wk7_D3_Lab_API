const PubSub = require('../helpers/pub_sub.js');

const SelectView = function (element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Country:countries loaded', (evt) => {
    const countriesData = evt.detail;
    console.log(countriesData);
    this.populate(countriesData);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedIndex = evt.target.value;
    console.log(selectedIndex);
    PubSub.publish('Countries:SelectView Change', selectedIndex);
  });
};



SelectView.prototype.populate = function(countries){
  countries.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name
    option.value = index;
    this.element.appendChild(option);
  })
}

module.exports = SelectView
