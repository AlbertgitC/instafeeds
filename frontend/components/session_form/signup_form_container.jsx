import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.auth,
    formType: 'Sign Up',
    navLink: <Link to="/login">Log in</Link>
  };
};

const emptyErrors = () => {
  return { 
    type: RECEIVE_SESSION_ERRORS, errors: [] 
  };
}


const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(emptyErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
