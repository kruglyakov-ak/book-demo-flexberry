import { Serializer as ReportSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-demo-report';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ReportSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
