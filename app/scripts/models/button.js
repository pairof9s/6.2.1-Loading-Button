var Backbone = require('backbone');
var $ = require('jquery');

var Clicker = Backbone.Model.extend({
  defaults: {
    label: 'Submit',
  },

  initialize: function(){
    console.log("Create A Like");
  },

});

var ClickerCollection = Backbone.Collection.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/sam',
  parse: function(data){
    return data.results;
  },
});
console.log('testing');

    module.exports = {
      'Clicker': Clicker,
    };
