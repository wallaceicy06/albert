import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pickup: function(pkg) {
      console.log('picking up ' + pkg);
    }
  },

  user: Ember.inject.controller(),
});
