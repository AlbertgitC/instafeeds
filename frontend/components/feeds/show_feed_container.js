import { connect } from 'react-redux';
import ShowFeed from './show_feed'
import { fetchFeed } from '../../actions/feeds_actions';
import { fetchUser } from '../../actions/users_actions';

const mapStateToProps = ({ entities, session }, ownProps) => {
  
  return {
    currentUser: entities.users[session.currentUserId],
    feed: entities.feeds[ownProps.match.params.feedId] || {},
    users: entities.users
  }
};

const mapDipatchToProps = (dispatch) => ({
  fetchFeed: (id) => dispatch(fetchFeed(id)),
  fetchUser: (id) => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDipatchToProps)(ShowFeed)