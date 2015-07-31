import Ember from 'ember';

export default Ember.Component.extend({
  setupAutocomplete: function() {
    var $this = this;

    var autocomplete = UIkit.autocomplete(this.$('div.uk-autocomplete'), {
      template: '<ul class="uk-nav uk-nav-autocomplete uk-autocomplete-results">{{~items}}<li data-value="{{$item.value}}" data-id="{{$item.id}}"><a>{{$item.name}}<div>{{$item.desc}}</div></a></li>{{/items}}</ul>',

      source: function(release) {
        $this.sendAction('textEntered', $this.get('searchText'), release);
      },
    });

    this.$().on('selectitem.uk.autocomplete', function(eventObject, data) {
      $this.valueUpdater(data);
    });
  }.on('didInsertElement'),

  valueUpdater: function(data) {
    this.set('value', data.id);
  }.observes('searchText')
});
