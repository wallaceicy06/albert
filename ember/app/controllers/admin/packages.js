import Ember from 'ember';

export default Ember.Controller.extend({
  sortedList: function() {
    return Ember.ArrayProxy.extend(Ember.SortableMixin).create({
      sortProperties: ['timeCheckin'],
      sortAscending: false,
      content: this.get('model')
    });
  }.property('model')
});
