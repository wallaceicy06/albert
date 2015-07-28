import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    destroy: function(user) {
      user.deleteRecord();
      user.save();
    },

    sortBy: function(property) {
      if (Ember.isEqual(this.get('sortProperties')[0], property)) {
        this.set('sortAscending', !this.get('sortAscending'));
      } else {
        this.set('sortProperties', [property]);
        this.set('sortAscending', true);
      }
    },
  },

  sortAscending: true,

  sortProperties: ['lastName'],

  sortedByFirstName: function() {
    return Ember.isEqual(this.get('sortProperties')[0], 'firstName');
  }.property('sortProperties'),

  sortedByLastName: function() {
    return Ember.isEqual(this.get('sortProperties')[0], 'lastName');
  }.property('sortProperties'),

  sortedByUsername: function() {
    return Ember.isEqual(this.get('sortProperties')[0], 'username');
  }.property('sortProperties'),

  sortedByEmail: function() {
    return Ember.isEqual(this.get('sortProperties')[0], 'email');
  }.property('sortProperties'),

  sortedByAdmin: function() {
    return Ember.isEqual(this.get('sortProperties')[0], 'admin');
  }.property('sortProperties'),

  sortedList: function() {
    return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      sortProperties: this.get('sortProperties'),
      sortAscending: this.get('sortAscending'),
      content: this.get('model')
    });
  }.property('model', 'sortProperties', 'sortAscending')
});
