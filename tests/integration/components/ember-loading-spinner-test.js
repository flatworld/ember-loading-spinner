import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ember-loading-spinner', 'Integration | Component | ember loading spinner', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{ember-loading-spinner}}`);

  var $spinnerEl = this.$().find('div.spinner');
  assert.ok($spinnerEl.length, 'spinner element found by class');
  assert.equal($spinnerEl.attr('role'), 'progressbar', 'spinner element has expected role');
});
