import { connect } from 'react-redux';
import { editUser } from '../../actions/users_actions';
import UserEditForm from './user_form';

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.auth,
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editUser: user => dispatch(editUser(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);