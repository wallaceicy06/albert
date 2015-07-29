import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    pickup: function(pkg) {
      pkg.set('pickedUp', true);

      pkg.save();
    }
  },

  sortedList: function() {
    return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      sortProperties: ['timeCheckin'],
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model'),

  user: Ember.inject.controller(),
});
