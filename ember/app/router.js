import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('packages', function() {
      this.route('new');
    });
  });
  this.route('mailbox');
});

export default Router;
