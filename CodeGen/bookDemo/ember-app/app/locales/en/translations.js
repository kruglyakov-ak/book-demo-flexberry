import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'книжный-клуб': {
          caption: 'книжный-клуб',
          title: 'книжный-клуб',
          'i-i-s-book-demo-application-l': {
            caption: 'i-i-s-book-demo-application-l',
            title: 'i-i-s-book-demo-application-l'
          },
          'i-i-s-book-demo-book-l': {
            caption: 'i-i-s-book-demo-book-l',
            title: 'i-i-s-book-demo-book-l'
          },
          'i-i-s-book-demo-club-meeting-l': {
            caption: 'i-i-s-book-demo-club-meeting-l',
            title: 'i-i-s-book-demo-club-meeting-l'
          },
          'i-i-s-book-demo-meeting-plan-l': {
            caption: 'i-i-s-book-demo-meeting-plan-l',
            title: 'i-i-s-book-demo-meeting-plan-l'
          },
          'i-i-s-book-demo-speaker-l': {
            caption: 'i-i-s-book-demo-speaker-l',
            title: 'i-i-s-book-demo-speaker-l'
          }
        },
        'book-demo': {
          caption: 'book-demo',
          title: 'book-demo',
          'i-i-s-book-demo-application-l': {
            caption: 'i-i-s-book-demo-application-l',
            title: 'i-i-s-book-demo-application-l'
          },
          'i-i-s-book-demo-book-l': {
            caption: 'i-i-s-book-demo-book-l',
            title: 'i-i-s-book-demo-book-l'
          },
          'i-i-s-book-demo-speaker-l': {
            caption: 'i-i-s-book-demo-speaker-l',
            title: 'i-i-s-book-demo-speaker-l'
          },
          'i-i-s-book-demo-club-meeting-l': {
            caption: 'i-i-s-book-demo-club-meeting-l',
            title: 'i-i-s-book-demo-club-meeting-l'
          },
          'i-i-s-book-demo-meeting-plan-l': {
            caption: 'i-i-s-book-demo-meeting-plan-l',
            title: 'i-i-s-book-demo-meeting-plan-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
