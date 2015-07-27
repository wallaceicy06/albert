import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pickup: function(pkg) {
      pkg.set('pickedUp', true);

      pkg.save();
    }
  },

  user: Ember.inject.controller(),
});
