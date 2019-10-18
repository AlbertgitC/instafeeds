import { connect } from 'react-redux';
import Like from './like';
import { likeFeed, unlikeFeed, fetchFeedLikers } from '../../actions/likes_actions';




const mapStateToProps = ({ entities, session }, ownProps) => {
  
  return {
    currentUser: entities.users[session.currentUserId],
    likerIds: entities.feeds[ownProps.feed_id].likerIds || []
  };
};

const mapDipatchToProps = dispatch => {
  return {
    likeFeed: feed_id => dispatch(likeFeed(feed_id)),
    unlikeFeed: feed_id => dispatch(unlikeFeed(feed_id)),
    fetchFeedLikers: feed_id => dispatch(fetchFeedLikers(feed_id))
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(Like)