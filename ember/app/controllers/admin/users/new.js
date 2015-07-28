import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var that = this;

      this.get('model').save().then(function() {
        that.set('model', that.store.createRecord('user'));
      }, function() {
        console.log('user save unsuccessful');
      });
    }
  },

  inferredEmail: function() {
    var username = this.get('model.username');
    if (username && username.length > 0) {
      this.set('model.email', this.get('model.username') + '@rice.edu');
    }
  }.observes('model.username')
});
