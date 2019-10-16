import { connect } from 'react-redux';
import FeedForm from './feed_form'
import { createFeed, fetchFeeds } from '../../actions/feeds_actions';


const mapStateToProps = ({ entities, session, errors }) => ({
  currentUser: entities.users[session.currentUserId],
  errors: errors.feed,
  followingIds: entities.users[session.currentUserId].followedUserIds
});

const mapDipatchToProps = (dispatch) => ({
  createFeed: (feed) => dispatch(createFeed(feed)),
  fetchFeeds: (ids) => dispatch(fetchFeeds(ids))
});


export default connect(mapStateToProps, mapDipatchToProps)(FeedForm)