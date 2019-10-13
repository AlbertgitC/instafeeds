import { connect } from 'react-redux';
import { editUser } from '../../actions/users_actions';
import UserEditPasswordForm from './user_pw_form';
import { RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';

const emptyErrors = () => {
  return {
    type: RECEIVE_SESSION_ERRORS, errors: []
  };
}

const mapStateToProps = ({ errors, entities, session }) => {
  return {
    errors: errors.auth,
    currentUser: entities.users[session.currentUserId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    editUser: user => dispatch(editUser(user)),
    clearErrors: () => dispatch(emptyErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditPasswordForm);