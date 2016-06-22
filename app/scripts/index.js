var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/button');
var ClickerCollection = require('./models/button').ClickerCollection;

var loadingButton = Backbone.Model.extend();

console.log(loadingButton);

var loadingCollection = Backbone.Collection.extend({
  url: 'http://swapi.co/api/planets/',
  parse: function(data){
    return data.results;
  },
});
console.log();

var planetStuff = new loadingCollection();

$('.buttonbox').text('Submit');


planetStuff.on('add', function(model){
  console.log(model.get('name'));
  $('.app').append(model);
});




$('.buttonbox').on('click', function(){
  $('.buttonbox').text('Loading...');
  $(this).fetch(planetStuff).done(function(){
    $(this).css({'color': '#999', 'background-image': 'linear-gradient(#eee , #ddd)', 'border': '1px solid #ccc'});
  });

}());





// $("#button1").mousedown(function() {
//     $(this).css({'background-image': 'linear-gradient(#ccc , #eee)', 'border': '1px solid #bbb'});
// });
//
// $("#button1").mouseup(function() {
//     $(this).css({'background-image': 'linear-gradient(#eee , #ccc)', 'border': '1px solid #ccc'});
// });
