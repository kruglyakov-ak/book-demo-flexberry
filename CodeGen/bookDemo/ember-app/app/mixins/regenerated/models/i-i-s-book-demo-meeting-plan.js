import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  meetingDate: DS.attr('date')
});

export let ValidationRules = {
  meetingDate: {
    descriptionKey: 'models.i-i-s-book-demo-meeting-plan.validations.meetingDate.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('MeetingPlanE', 'i-i-s-book-demo-meeting-plan', {
    meetingDate: attr('Дата встречи', { index: 0 })
  });

  modelClass.defineProjection('MeetingPlanL', 'i-i-s-book-demo-meeting-plan', {
    meetingDate: attr('Дата встречи', { index: 0 })
  });
};
