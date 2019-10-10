import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { logout } from '../../actions/session_actions';



const mapStateToProps = ({ entities, session }) => ({
  users: entities.users,
  currentUser: entities.users[session.currentUserId]
});

const mapDipatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(UserProfile)