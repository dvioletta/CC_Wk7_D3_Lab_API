const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Country = function() {
  this.text = null
};

Country.prototype.getData = function() {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) => {
    this.text = data;
    console.log(this.text);
    PubSub.publish('Country:countries loaded', this.text);

  });
  PubSub.subscribe('Countries:SelectView Change', (evt) =>{
    const selectedCountry = evt.detail;

    this.publishCountryData(selectedCountry);
  });
};

Country.prototype.publishCountryData = function(countriesIndex){
 const selectedCountry = this.text[countriesIndex];
 console.log(selectedCountry);
 PubSub.publish('Selected Country ready', selectedCountry);
};


module.exports = Country
