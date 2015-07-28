import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var newFirstName;
      var newLastName;
      var newUsername;
      var newEmail;
      var newIsAdmin;

      newFirstName = this.get('newFirstName');
      newLastName = this.get('newLastName');
      newUsername = this.get('newUsername');
      newEmail = this.get('newEmail');
      newIsAdmin = this.get('newIsAdmin');

      if (!newFirstName || !newLastName || !newUsername || !newEmail) {
        return false;
      }

      var newUser = this.store.createRecord('user', {
        firstName: newFirstName,
        lastName: newLastName,
        username: newUsername,
        email: newEmail,
        admin: newIsAdmin
      });

      newUser.save();
    }
  },

  inferredEmail: function() {
    if (this.get('newUsername').length > 0) {
      this.set('newEmail', this.get('newUsername') + '@rice.edu');
    }
  }.observes('newUsername')
});
