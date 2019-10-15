import { connect } from 'react-redux';
import SideBar from './side_bar';
import { fetchUser } from '../../actions/users_actions';


const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId],
  users: entities.users,
  currentUserFollowing: entities.users[session.currentUserId].followedUserIds
});

const mapDipatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id))
});


export default connect(mapStateToProps, mapDipatchToProps)(SideBar)