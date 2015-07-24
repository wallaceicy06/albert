import Ember from 'ember';

export default Ember.Controller.extend({
  fullName: function() {
    return this.get('model.firstName') + ' ' + this.get('model.lastName');
  }.property('model.firstName', 'model.lastName')
});
