import { Serializer as ApplicationSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-demo-application';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ApplicationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
