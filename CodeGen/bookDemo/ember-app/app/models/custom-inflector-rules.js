import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('application', 'Applications');
inflector.irregular('meeting', 'Meetings');
inflector.irregular('speaker', 'Speakers');
inflector.irregular('report', 'Reports');
inflector.irregular('demo-book', 'DemoBooks');
inflector.irregular('plan', 'Plans');

export default {};
