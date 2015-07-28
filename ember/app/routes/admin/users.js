import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter('user', {}, function(user) {
      return !user.get('isNew');
    });
  }
});
