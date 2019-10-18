import { connect } from 'react-redux';
import SideBar from './side_bar';
import { fetchUser, fetchUsers } from '../../actions/users_actions';
import { fetchFollowing } from '../../actions/follows_actions';


const mapStateToProps = ({ entities, session }) => ({
  currentUser: entities.users[session.currentUserId],
  users: entities.users,
  currentUserFollowing: entities.users[session.currentUserId].followedUserIds
});

const mapDipatchToProps = (dispatch) => ({
  fetchUser: id => dispatch(fetchUser(id)),
  fetchFollowing: user_id => dispatch(fetchFollowing(user_id)),
  fetchUsers: filter => dispatch(fetchUsers(filter))
});


export default connect(mapStateToProps, mapDipatchToProps)(SideBar)