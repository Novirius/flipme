import React from 'react';
import { connect } from 'react-redux';
import {fetchFolders} from '../../actions/folder_actions'
import DashboardBody from './dashboard_body'

const mapState = ({ entities}) => ({
    folders: Object.values(entities.folders),
    foldersCount: Object.keys(entities.folders).length,
    // sets: entities.sets,
    // setsCount: Object.keys(entities.sets).length,
})

const mapDispatch = dispatch => ({
    fetchFolders: () => dispatch(fetchFolders())
})

export default connect(mapState, mapDispatch)(DashboardBody);