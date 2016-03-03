'use strict';
require('./example');

let makeRequest = function(){
  $.ajax({
      url: 'http://jsonplaceholder.typicode.com/users',
      method: 'GET',
      dataType: 'json',
    }).done(function(data) {
      console.log(data);
      renderData(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
};

let renderData = function(users){
  let userListingTemplate = require('./user-listing.handlebars');
  $('.info-here').html(userListingTemplate({users}));
};

$(document).ready(() => {
  $('.show-info').on('submit', function(e) {
    e.preventDefault();
    makeRequest();
  });
});
