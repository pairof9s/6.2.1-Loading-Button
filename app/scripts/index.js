var Backbone = require('backbone');
var $ = require('jquery');
var models = require('./models/button');

var likeButton = new models.Clicker();

$('.buttonbox').on('click', function(event){
  event.preventDefault();

});

$("#button1").mousedown(function() {
    $(this).css({'background-image': 'linear-gradient(#ccc , #eee)', 'border': '1px solid #bbb'});
});

$("#button1").mouseup(function() {
    $(this).css({'background-image': 'linear-gradient(#eee , #ccc)', 'border': '1px solid #ccc'});
});
