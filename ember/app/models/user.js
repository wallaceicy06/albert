import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  username: DS.attr('string'),
  email: DS.attr('string'),
  admin: DS.attr('boolean'),
  packages: DS.hasMany('package', { async: true, inverse: 'owner' })
});
