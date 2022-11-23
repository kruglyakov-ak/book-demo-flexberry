import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  applicationDate: DS.attr('date'),
  speaker: DS.belongsTo('i-i-s-book-demo-speaker', { inverse: null, async: false }),
  book: DS.belongsTo('i-i-s-book-demo-book', { inverse: null, async: false })
});

export let ValidationRules = {
  applicationDate: {
    descriptionKey: 'models.i-i-s-book-demo-application.validations.applicationDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-book-demo-application.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-book-demo-application.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ApplicationE', 'i-i-s-book-demo-application', {
    applicationDate: attr('Дата заявки', { index: 0 }),
    speaker: belongsTo('i-i-s-book-demo-speaker', 'Спикер', {
      surname: attr('~', { index: 2, hidden: true }),
      name: attr('~', { index: 3, hidden: true }),
      patronymic: attr('~', { index: 4 })
    }, { index: 1 }),
    book: belongsTo('i-i-s-book-demo-book', 'Название книги', {
      name: attr('~', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'name' })
  });

  modelClass.defineProjection('ApplicationL', 'i-i-s-book-demo-application', {
    applicationDate: attr('Дата заявки', { index: 0 }),
    speaker: belongsTo('i-i-s-book-demo-speaker', 'Спикер', {
      surname: attr('Спикер', { index: 1 })
    }, { index: -1, hidden: true }),
    book: belongsTo('i-i-s-book-demo-book', 'Название книги', {
      name: attr('Название книги', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
