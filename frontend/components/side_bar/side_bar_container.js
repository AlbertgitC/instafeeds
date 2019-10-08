import { connect } from 'react-redux';
import SideBar from './side_bar';
// import { logout } from '../../actions/session_actions';

const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId]
});

// const mapDipatchToProps = (dispatch) => ({
//   logout: () => dispatch(logout())
// });


export default connect(mapStateToProps)(SideBar)