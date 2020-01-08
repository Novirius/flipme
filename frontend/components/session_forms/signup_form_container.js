import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapState = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to="/login">log in instead</Link>,
})

const mapDispatch = dispatch =>  ({
    processForm: (user) => dispatch(signup(user)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>
        Log In
      </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(SessionForm);
