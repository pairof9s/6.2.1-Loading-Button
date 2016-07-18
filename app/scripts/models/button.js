var Backbone = require('backbone');
var $ = require('jquery');

var Clicker = Backbone.Model.extend({
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
  'ClickerCollection': ClickerCollection
}
