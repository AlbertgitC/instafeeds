import { connect } from 'react-redux';
import UserThumbForm from './user_thumbnail_form';
import { editUser, fetchUser } from '../../actions/users_actions';





const mapStateToProps = ({ entities, session }, ownProps) => {

  return {
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDipatchToProps = dispatch => {
  return {
    editUser: user => dispatch(editUser(user)),
    fetchUser: id => dispatch(fetchUser(id))
  };
};


export default connect(mapStateToProps, mapDipatchToProps)(UserThumbForm)