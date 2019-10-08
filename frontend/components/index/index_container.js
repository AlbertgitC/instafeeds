import { connect } from 'react-redux';
import Index from './index';


const mapStateToProps = ({ entities, session }) => ({
  users: entities.users,
  currentUser: entities.users[session.currentUserId]
});

const mapDipatchToProps = (dispatch) => ({
  login: () => dispatch(login())
});


export default connect(mapStateToProps, mapDipatchToProps)(Index)