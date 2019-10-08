import { connect } from 'react-redux';
import NavBar from './nav_bar'
import { login } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({ 
  users: entities.users,
  currentUser: entities.users[session.currentUserId]
});

const mapDipatchToProps = (dispatch) => ({
  login: () => dispatch(login())
});


export default connect(mapStateToProps, mapDipatchToProps)(NavBar)