import { Serializer as ClubMeetingSerializer } from
  '../mixins/regenerated/serializers/i-i-s-book-demo-club-meeting';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ClubMeetingSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
