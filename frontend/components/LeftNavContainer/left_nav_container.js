import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftNav from './left_nav'

const mapState = ({ entities, errors, session: { id } }) => ({
    folders: entities.folders,
    foldersCount: Object.keys(entities.folders).length,
    sets: entities.sets,
    setsCount: Object.keys(entities.sets).length,
    homeLink: <Link to="/"><i className="fas fa-home"></i> Home</Link>,
    settingsLink: <Link to="/settings"><i className="fas fa-cog"></i> Settings</Link>
})

const mapDispatch = dispatch => ({
    
})

export default connect(mapState, null)(LeftNav);