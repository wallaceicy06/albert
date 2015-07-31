import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    search: function(query, sendResults) {
      this.get('users').then(function(users) {
        var matchingUsers = users.filter(function(user) {
          var fullName = user.get('firstName') + ' ' + user.get('lastName');
          var username = user.get('username');

          if (fullName.toLowerCase().indexOf(query.toLowerCase()) >= 0) {
            console.log('returning true');
            return true;
          } else if (username.indexOf(query.toLowerCase()) >= 0) {
            console.log('returning true');
            return true;
          }

          return false;
        });

        console.log(matchingUsers);

        var results = [];

        matchingUsers.forEach(function(user) {
          results.push({
            value: user.get('username'),
            name: user.get('firstName') + ' ' + user.get('lastName'),
            desc: user.get('username'),
            id: user.get('id')
          });
        });

        console.log(results);

        sendResults(results);

      });

    },

    create: function() {
      var newOwnerId = this.get('newOwnerId');

      console.log(newOwnerId);

      var $this = this;

      this.store.find('user', newOwnerId).then(function(user) {
        $this.get('model').set('owner', user);
      }).then(function() {
        $this.get('model').save().then(function() {
          /* Reset the form */
          $this.transitionToRoute('admin.packages.index');
        }, function() {
          console.log('package save unsuccessful');
        });
      });
    },
  },

  users: function() {
    return this.store.findAll('user');
  }.property()

});
