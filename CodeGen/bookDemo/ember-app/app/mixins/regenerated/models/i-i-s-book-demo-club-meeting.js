import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  meetingDate: DS.attr('date'),
  report: DS.hasMany('i-i-s-book-demo-report', { inverse: 'clubMeeting', async: false })
});

export let ValidationRules = {
  meetingDate: {
    descriptionKey: 'models.i-i-s-book-demo-club-meeting.validations.meetingDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  report: {
    descriptionKey: 'models.i-i-s-book-demo-club-meeting.validations.report.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ClubMeetingE', 'i-i-s-book-demo-club-meeting', {
    meetingDate: attr('Дата встречи', { index: 0 }),
    report: hasMany('i-i-s-book-demo-report', 'Доклад', {
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
    })
  });

  modelClass.defineProjection('ClubMeetingL', 'i-i-s-book-demo-club-meeting', {
    meetingDate: attr('Дата встречи', { index: 0 }),
    report: hasMany('i-i-s-book-demo-report', 'Доклад', {
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
    })
  });
};
