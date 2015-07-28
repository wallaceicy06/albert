import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy: function(user) {
      user.deleteRecord();
      user.save();
    }
  }
});
