import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api',
  shouldBackgroundReloadRecord: function (/* store, snapshot */) {
    return false;
  }
});
