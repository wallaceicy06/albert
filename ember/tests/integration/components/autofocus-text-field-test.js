import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('focusable-text-field', 'Integration | Component | focusable text field', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{focusable-text-field}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#focusable-text-field}}
      template block text
    {{/focusable-text-field}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
