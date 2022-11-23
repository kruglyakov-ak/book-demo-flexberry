import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-book-demo-meeting-plan', 'Unit | Model | i-i-s-book-demo-meeting-plan', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-book-demo-application',
    'model:i-i-s-book-demo-book',
    'model:i-i-s-book-demo-club-meeting',
    'model:i-i-s-book-demo-meeting-plan',
    'model:i-i-s-book-demo-report',
    'model:i-i-s-book-demo-speaker',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
