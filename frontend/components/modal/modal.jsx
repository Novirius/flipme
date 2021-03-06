import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_forms/login_form_container';
import SignupFormContainer from '../session_forms/signup_form_container';
import FolderFormContainer from '../modal_forms/folder_form_container';
import DeckFormContainer from '../deck_form/deck_form_container';

const Modal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'folder':
      component = <FolderFormContainer />;
      break;
    case 'deck':
        component = <DeckFormContainer />;
        break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapState = state => ({
  modal: state.ui.modal
})

const mapDispatch = dispatch => ({
  closeModal: () => dispatch(closeModal())
})

export default connect(mapState, mapDispatch)(Modal);