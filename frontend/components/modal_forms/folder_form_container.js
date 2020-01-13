import { connect } from 'react-redux';
import React from 'react';
import FolderForm from './folder_form';
import {openModal, closeModal} from '../../actions/modal_actions'


const mapState = ({ errors }) => ({
    
})

const mapDispatch = dispatch =>  ({
    processForm: (folder) => dispatch(createFolder(folder)).then(() => dispatch(closeModal())),
    closeModal: () => dispatch(closeModal()),
    openModal: modaltype => dispatch(openModal(modaltype))
})

export default connect(null, mapDispatch)(FolderForm);
