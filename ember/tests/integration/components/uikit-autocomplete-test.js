import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('uikit-autocomplete', 'Integration | Component | uikit autocomplete', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{uikit-autocomplete}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#uikit-autocomplete}}
      template block text
    {{/uikit-autocomplete}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
