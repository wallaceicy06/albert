import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('homepage', { path: '/' });
  this.route('admin', function() {
    this.route('packages', function() {
      this.route('new');
    });
    this.route('users', function() {
      this.route('new');
      this.route('edit', { path: '/edit/:user_id' });
    });
  });
  this.route('user', function() {
    this.route('packages', function() {
      this.route('pickedup');
      this.route('all');
    });
  });
});

export default Router;
