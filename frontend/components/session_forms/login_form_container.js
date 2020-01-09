import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';
import {openModal, closeModal} from '../../actions/modal_actions'
import { logout } from '../../util/session_api_util';

const mapState = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
})

const mapDispatch = dispatch => ({
    processForm: (user) => dispatch(login(user)).then(() => dispatch(closeModal())),
    otherForm: (
      <button type="button" onClick={() => dispatch(openModal('signup'))}>
        Signup
      </button>
    ),
    closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(LoginForm);
