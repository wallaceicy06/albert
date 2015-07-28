import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.filter('package', {}, function(pkg) {
      return !pkg.get('isNew');
    });
  }
});
