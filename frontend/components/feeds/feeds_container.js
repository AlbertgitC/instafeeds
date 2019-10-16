import { connect } from 'react-redux';
import Feeds from './feeds'
import { fetchFeeds } from '../../actions/feeds_actions';
import { fetchUsers } from '../../actions/users_actions';

const mapStateToProps = ({ entities, session }) => ({
  user_ids: entities.users[session.currentUserId].followedUserIds,
  currentUser: entities.users[session.currentUserId],
  users: entities.users
});

const mapDipatchToProps = (dispatch) => ({
  fetchFeeds: (feeds) => dispatch(fetchFeeds(feeds)),
  fetchUsers: (user_ids) => dispatch(fetchUsers(user_ids))
});


export default connect(mapStateToProps, mapDipatchToProps)(Feeds)