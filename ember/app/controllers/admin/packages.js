import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    create: function() {
      var newOwner = this.get('newOwner');
      var newBarcode = this.get('newBarcode');

      if (!newOwner || !newBarcode) {
        return false;
      }

      var pkg = this.store.createRecord('package', {
        barcode: newBarcode
      });

      this.store.find('user', newOwner).then(function(user) {
        pkg.set('owner', user);
      }).then(function() {
        pkg.save();
      });

    }
  }
});
