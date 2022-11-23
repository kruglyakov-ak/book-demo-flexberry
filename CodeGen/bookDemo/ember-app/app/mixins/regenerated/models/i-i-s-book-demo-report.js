import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  reportDate: DS.attr('date'),
  bookRating: DS.attr('number'),
  uRLPresentation: DS.attr('string'),
  uRLVideo: DS.attr('string'),
  review: DS.attr('string'),
  speaker: DS.belongsTo('i-i-s-book-demo-speaker', { inverse: null, async: false }),
  book: DS.belongsTo('i-i-s-book-demo-book', { inverse: null, async: false }),
  clubMeeting: DS.belongsTo('i-i-s-book-demo-club-meeting', { inverse: 'report', async: false })
});

export let ValidationRules = {
  reportDate: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.reportDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  bookRating: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.bookRating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  uRLPresentation: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.uRLPresentation.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLVideo: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.uRLVideo.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  review: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.review.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  speaker: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.speaker.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  book: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.book.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  clubMeeting: {
    descriptionKey: 'models.i-i-s-book-demo-report.validations.clubMeeting.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ReportE', 'i-i-s-book-demo-report', {
    reportDate: attr('Дата доклада', { index: 0 }),
    bookRating: attr('Оценка книги', { index: 1 }),
    uRLPresentation: attr('Ссылка на презентауию', { index: 2 }),
    uRLVideo: attr('Ссылка на видео', { index: 3 }),
    review: attr('Отзыв', { index: 4 }),
    speaker: belongsTo('i-i-s-book-demo-speaker', 'Спикер', {
      surname: attr('~', { index: 6, hidden: true })
    }, { index: 5, displayMemberPath: 'surname' }),
    book: belongsTo('i-i-s-book-demo-book', 'Книга', {
      name: attr('~', { index: 8, hidden: true })
    }, { index: 7, displayMemberPath: 'name' })
  });
};
