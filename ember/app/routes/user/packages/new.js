import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'user.packages',


  renderTemplate: function(controller) {
    this.render('user.packages.index', { controller: controller });
  }
});
