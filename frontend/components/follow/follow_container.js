import { connect } from 'react-redux';
import Follow from './follow';
import { followUser, unfollowUser } from '../../actions/follows_actions';




const mapStateToProps = (state) => {
  return {
    // user: entities.users[ownProps.props.match.params.userId],
    // currentUser: entities.users[session.currentUserId]
  };
};

const mapDipatchToProps = dispatch => {
  return {
    followUser: follow => dispatch(followUser(follow)),
    unfollowUser: follow => dispatch(unfollowUser(follow))
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(Follow)