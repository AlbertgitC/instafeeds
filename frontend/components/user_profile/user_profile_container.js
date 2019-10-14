import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/users_actions';
import { fetchFollowing } from '../../actions/follows_actions';
import { RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';

const emptyErrors = () => {
  return {
    type: RECEIVE_SESSION_ERRORS, errors: []
  };
}

const mapStateToProps = ({ entities, session, errors }, ownProps) => {
  
  return {
  user: entities.users[ownProps.match.params.userId],
  currentUser: entities.users[session.currentUserId],
  errors: errors.auth
  };
};

const mapDipatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id)),
    fetchFollowing: id =>dispatch(fetchFollowing(id)),
    clearErrors: () => dispatch(emptyErrors())
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(UserProfile)