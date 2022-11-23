import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  author: DS.attr('string'),
  stringCount: DS.attr('number'),
  uRLCover: DS.attr('string'),
  uRLDescription: DS.attr('string'),
  tags: DS.attr('string'),
  /**
    Non-stored property.

    @property averageRating
  */
  averageRating: DS.attr('decimal'),
  /**
    Method to set non-stored property.
    Please, use code below in model class (outside of this mixin) otherwise it will be replaced during regeneration of models.
    Please, implement 'averageRatingCompute' method in model class (outside of this mixin) if you want to compute value of 'averageRating' property.

    @method _averageRatingCompute
    @private
    @example
      ```javascript
      _averageRatingChanged: on('init', observer('averageRating', function() {
        once(this, '_averageRatingCompute');
      }))
      ```
  */
  _averageRatingCompute: function() {
    let result = (this.averageRatingCompute && typeof this.averageRatingCompute === 'function') ? this.averageRatingCompute() : null;
    this.set('averageRating', result);
  }
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  author: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.author.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  stringCount: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.stringCount.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  uRLCover: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.uRLCover.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  uRLDescription: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.uRLDescription.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  tags: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.tags.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  averageRating: {
    descriptionKey: 'models.i-i-s-book-demo-book.validations.averageRating.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'i-i-s-book-demo-book', {
    name: attr('Название', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    stringCount: attr('Количество страниц', { index: 2 }),
    uRLCover: attr('Обложка', { index: 3 }),
    uRLDescription: attr('Описание', { index: 4 }),
    tags: attr('Тэги', { index: 5 }),
    averageRating: attr('Средний рейтинг', { index: 6 })
  });

  modelClass.defineProjection('BookL', 'i-i-s-book-demo-book', {
    name: attr('Названиеe', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    stringCount: attr('Количество страниц', { index: 2 }),
    uRLCover: attr('Обложка', { index: 3 }),
    uRLDescription: attr('Описание', { index: 4 }),
    tags: attr('Тэги', { index: 5 }),
    averageRating: attr('Средний рейтинг', { index: 6 })
  });
};
