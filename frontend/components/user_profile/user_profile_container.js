import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';
import { fetchUser } from '../../actions/users_actions';



const mapStateToProps = ({ entities, session }, ownProps) => {
  
  return {
  user: entities.users[ownProps.match.params.userId],
  currentUser: entities.users[session.currentUserId]
  };
};

const mapDipatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchUser: id => dispatch(fetchUser(id))
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(UserProfile)