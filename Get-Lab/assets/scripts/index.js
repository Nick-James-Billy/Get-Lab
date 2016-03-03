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
