import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISbookDemoApplicationLForm from './forms/i-i-s-book-demo-application-l';
import IISbookDemoBookLForm from './forms/i-i-s-book-demo-book-l';
import IISbookDemoClubMeetingLForm from './forms/i-i-s-book-demo-club-meeting-l';
import IISbookDemoMeetingPlanLForm from './forms/i-i-s-book-demo-meeting-plan-l';
import IISbookDemoSpeakerLForm from './forms/i-i-s-book-demo-speaker-l';
import IISbookDemoApplicationEForm from './forms/i-i-s-book-demo-application-e';
import IISbookDemoBookEForm from './forms/i-i-s-book-demo-book-e';
import IISbookDemoClubMeetingEForm from './forms/i-i-s-book-demo-club-meeting-e';
import IISbookDemoMeetingPlanEForm from './forms/i-i-s-book-demo-meeting-plan-e';
import IISbookDemoSpeakerEForm from './forms/i-i-s-book-demo-speaker-e';
import IISbookDemoApplicationModel from './models/i-i-s-book-demo-application';
import IISbookDemoBookModel from './models/i-i-s-book-demo-book';
import IISbookDemoClubMeetingModel from './models/i-i-s-book-demo-club-meeting';
import IISbookDemoMeetingPlanModel from './models/i-i-s-book-demo-meeting-plan';
import IISbookDemoReportModel from './models/i-i-s-book-demo-report';
import IISbookDemoSpeakerModel from './models/i-i-s-book-demo-speaker';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-book-demo-application': IISbookDemoApplicationModel,
    'i-i-s-book-demo-book': IISbookDemoBookModel,
    'i-i-s-book-demo-club-meeting': IISbookDemoClubMeetingModel,
    'i-i-s-book-demo-meeting-plan': IISbookDemoMeetingPlanModel,
    'i-i-s-book-demo-report': IISbookDemoReportModel,
    'i-i-s-book-demo-speaker': IISbookDemoSpeakerModel,
  },

  'application-name': 'Книжный клуб',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Книжный клуб',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Книжный клуб',
          title: 'Книжный клуб'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'книжный-клуб': {
          caption: 'Книжный клуб',
          title: 'Книжный клуб',
          'i-i-s-book-demo-application-l': {
            caption: 'Заявки',
            title: ''
          },
          'i-i-s-book-demo-book-l': {
            caption: 'Книги',
            title: ''
          },
          'i-i-s-book-demo-club-meeting-l': {
            caption: 'Встречи клуба',
            title: ''
          },
          'i-i-s-book-demo-meeting-plan-l': {
            caption: 'Планы встреч',
            title: ''
          },
          'i-i-s-book-demo-speaker-l': {
            caption: 'Спикеры',
            title: ''
          }
        },
        'book-demo': {
          caption: 'bookDemo',
          title: 'bookDemo',
          'i-i-s-book-demo-application-l': {
            caption: 'Application',
            title: ''
          },
          'i-i-s-book-demo-book-l': {
            caption: 'Book',
            title: ''
          },
          'i-i-s-book-demo-speaker-l': {
            caption: 'Speaker',
            title: ''
          },
          'i-i-s-book-demo-club-meeting-l': {
            caption: 'Club meeting',
            title: ''
          },
          'i-i-s-book-demo-meeting-plan-l': {
            caption: 'Meeting plan',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-book-demo-application-l': IISbookDemoApplicationLForm,
    'i-i-s-book-demo-book-l': IISbookDemoBookLForm,
    'i-i-s-book-demo-club-meeting-l': IISbookDemoClubMeetingLForm,
    'i-i-s-book-demo-meeting-plan-l': IISbookDemoMeetingPlanLForm,
    'i-i-s-book-demo-speaker-l': IISbookDemoSpeakerLForm,
    'i-i-s-book-demo-application-e': IISbookDemoApplicationEForm,
    'i-i-s-book-demo-book-e': IISbookDemoBookEForm,
    'i-i-s-book-demo-club-meeting-e': IISbookDemoClubMeetingEForm,
    'i-i-s-book-demo-meeting-plan-e': IISbookDemoMeetingPlanEForm,
    'i-i-s-book-demo-speaker-e': IISbookDemoSpeakerEForm,
  },

});

export default translations;
