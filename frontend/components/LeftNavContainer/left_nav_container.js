import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftNav from './left_nav';
import {fetchFolders} from '../../actions/folder_actions';
import {fetchUserDecks} from '../../actions/deck_actions';
import {openModal, closeModal} from '../../actions/modal_actions';

const mapState = ({entities, session}) => {
    return {
        currentUser: entities.users[session.id],
        folders: Object.values(entities.folders),
        foldersCount: Object.keys(entities.folders).length,
        decks: entities.decks,
        decksCount: Object.keys(entities.decks).length,
        homeLink: <Link to="/"><i className="fas fa-home"></i> Home</Link>,
        settingsLink: <Link to="/settings"><i className="fas fa-cog"></i> Settings</Link>
    }

}

const mapDispatch = dispatch => ({
    fetchFolders: () => dispatch(fetchFolders()),
    fetchUserDecks: (userId) => dispatch(fetchUserDecks(userId)),
    openModal: modaltype => dispatch(openModal(modaltype))
})

export default connect(mapState, mapDispatch)(LeftNav);