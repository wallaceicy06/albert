import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var newOwner = this.get('newOwner');

      var that = this;

      this.store.find('user', newOwner).then(function(user) {
        that.get('model').set('owner', user);
      }).then(function() {
        that.get('model').save().then(function() {
          /* Reset the form */
          that.set('newOwner', '');
          that.set('model', that.store.createRecord('package'));
        }, function() {
          console.log('package save unsuccessful');
        });
      });
    },
  },
});
