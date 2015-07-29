import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'user.packages',

  model: function() {
    return this.modelFor('user').get('packages').filter(function(pkg) {
      return !pkg.get('pickedUp');
    });
  },

  renderTemplate: function(controller) {
    this.render('user.packages.index', { controller: controller });
  }
});
