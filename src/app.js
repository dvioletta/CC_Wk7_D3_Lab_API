const Country = require('./model/countries.js');
const SelectView = require('./views/select_views.js');
const InfoView = require('./views/info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');



  const infodiv = document.querySelector('select#countries');
  const selectView = new SelectView(infodiv);
  console.log('hi');
  selectView.bindEvents();

  const infodivB = document.querySelector('#country');
  const infoview = new InfoView(infodivB);
  
  infoview.bindEvents();

  const countries = new Country();
  countries.getData();


});
