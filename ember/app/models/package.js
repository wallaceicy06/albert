import DS from 'ember-data';

export default DS.Model.extend({
  timeCheckin: DS.attr('date'),
  pickedUp: DS.attr('boolean'),
  barcode: DS.attr('number'),
  processor: DS.belongsTo('user', { async: true }),
  owner: DS.belongsTo('user', { async: true, inverse: 'packages' })
});
