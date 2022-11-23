import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-book-demo-speaker', 'Unit | Serializer | i-i-s-book-demo-speaker', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-book-demo-speaker',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
