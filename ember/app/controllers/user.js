import Ember from 'ember';

export default Ember.Controller.extend({
  fullName: function() {
    var user = this.get('model');

    return user.get('firstName') + ' ' + user.get('lastName');
  }.property('model.firstName', 'model.lastName')
});
