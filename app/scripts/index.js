var Backbone = require('backbone');
var $ = require('jquery');
var Clicker = require('./models/button').Clicker;
var ClickerCollection = require('./models/button').ClickerCollection;

var loadingButton = new Clicker();


var loadingCollection = Backbone.Collection.extend({
  url: 'http://swapi.co/api/planets/',
  parse: function(data){
    return data.results;
  },
});

var planetStuff = new loadingCollection();

$('.buttonbox').html('Submit');

planetStuff.on('add', function(model){
  console.log(model.get('name'));
  $('.app').append(model);
});


$('.buttonbox').on('click', function(event){

  $(this).html('Loading...');

  planetStuff.fetch().done(function(){
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
