import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, RECEIVE_SESSION_ERRORS } from '../../actions/session_actions';
import SessionForm from './session_form';
import { fetchFollowing, fetchFollowers } from '../../actions/follows_actions';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.auth,
    formType: 'Log In',
    navLink: <Link to="/signup">Sign up</Link>
  };
};

const emptyErrors = () => {
  return { type: RECEIVE_SESSION_ERRORS, errors: [] };
}

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(emptyErrors()),
    fetchFollowing: (id) => dispatch(fetchFollowing(id)),
    fetchFollowers: (id) => dispatch(fetchFollowers(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
