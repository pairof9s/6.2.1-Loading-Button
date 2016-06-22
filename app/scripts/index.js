var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/button');
var ClickerCollection = require('./models/button').ClickerCollection;

var loadingButton = Backbone.Model.extend({
  defaults:{
    label: 'SUBMIT',
  },
});
console.log();
var loadingCollection = Backbone.Collection.extend({
  url: 'http://swapi.co/api/planets/',
  parse: function(data){
    return data.results;
  },
});
console.log(loadingCollection);

var samStuff = new loadingCollection();

samStuff.fetch();
console.log(samStuff);

$('.buttonbox').text('Submit');
$('.buttonbox').on('click', function(event){
  event.preventDefault();
  $('.buttonbox').text('Loading...');
  $(this).css({'color': '#999', 'background-image': 'linear-gradient(#eee , #ddd)', 'border': '1px solid #ccc'});
});





// $("#button1").mousedown(function() {
//     $(this).css({'background-image': 'linear-gradient(#ccc , #eee)', 'border': '1px solid #bbb'});
// });
//
// $("#button1").mouseup(function() {
//     $(this).css({'background-image': 'linear-gradient(#eee , #ccc)', 'border': '1px solid #ccc'});
// });
