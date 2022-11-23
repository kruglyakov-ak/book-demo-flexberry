import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  surname: DS.attr('string'),
  name: DS.attr('string'),
  patronymic: DS.attr('string')
});

export let ValidationRules = {
  surname: {
    descriptionKey: 'models.i-i-s-book-demo-speaker.validations.surname.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  name: {
    descriptionKey: 'models.i-i-s-book-demo-speaker.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  patronymic: {
    descriptionKey: 'models.i-i-s-book-demo-speaker.validations.patronymic.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('SpeakerE', 'i-i-s-book-demo-speaker', {
    surname: attr('Фамилия', { index: 0 }),
    name: attr('Имя', { index: 1 }),
    patronymic: attr('Отчество', { index: 2 })
  });

  modelClass.defineProjection('SpeakerL', 'i-i-s-book-demo-speaker', {
    surname: attr('Фамилия', { index: 0 }),
    name: attr('Имя', { index: 1 }),
    patronymic: attr('Отчество', { index: 2 })
  });
};
