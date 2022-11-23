import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-book-demo-application-l');
  this.route('i-i-s-book-demo-application-e',
  { path: 'i-i-s-book-demo-application-e/:id' });
  this.route('i-i-s-book-demo-application-e.new',
  { path: 'i-i-s-book-demo-application-e/new' });
  this.route('i-i-s-book-demo-book-l');
  this.route('i-i-s-book-demo-book-e',
  { path: 'i-i-s-book-demo-book-e/:id' });
  this.route('i-i-s-book-demo-book-e.new',
  { path: 'i-i-s-book-demo-book-e/new' });
  this.route('i-i-s-book-demo-club-meeting-l');
  this.route('i-i-s-book-demo-club-meeting-e',
  { path: 'i-i-s-book-demo-club-meeting-e/:id' });
  this.route('i-i-s-book-demo-club-meeting-e.new',
  { path: 'i-i-s-book-demo-club-meeting-e/new' });
  this.route('i-i-s-book-demo-meeting-plan-l');
  this.route('i-i-s-book-demo-meeting-plan-e',
  { path: 'i-i-s-book-demo-meeting-plan-e/:id' });
  this.route('i-i-s-book-demo-meeting-plan-e.new',
  { path: 'i-i-s-book-demo-meeting-plan-e/new' });
  this.route('i-i-s-book-demo-speaker-l');
  this.route('i-i-s-book-demo-speaker-e',
  { path: 'i-i-s-book-demo-speaker-e/:id' });
  this.route('i-i-s-book-demo-speaker-e.new',
  { path: 'i-i-s-book-demo-speaker-e/new' });
});

export default Router;
