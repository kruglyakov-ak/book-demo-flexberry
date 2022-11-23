import { Serializer as MeetingPlanSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-demo-meeting-plan';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(MeetingPlanSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
