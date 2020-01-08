import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
})

const mapDispatch = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(SessionForm);
