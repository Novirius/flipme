import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftNav from './left_nav'
import {fetchFolders} from '../../actions/folder_actions'

const mapState = ({ entities}) => {
    console.log(entities); 
    return {
        folders: Object.values(entities.folders),
        foldersCount: Object.keys(entities.folders).length,
        // sets: entities.sets,
        // setsCount: Object.keys(entities.sets).length,
        homeLink: <Link to="/"><i className="fas fa-home"></i> Home</Link>,
        settingsLink: <Link to="/settings"><i className="fas fa-cog"></i> Settings</Link>
    }

}

const mapDispatch = dispatch => ({
    fetchFolders: () => dispatch(fetchFolders())
})

export default connect(mapState, mapDispatch)(LeftNav);