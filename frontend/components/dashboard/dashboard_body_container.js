import React from 'react';
import { connect } from 'react-redux';
import {fetchFolders} from '../../actions/folder_actions'
import DashboardBody from './dashboard_body'

const mapState = ({ entities}) => ({
    folders: Object.values(entities.folders),
    foldersCount: Object.keys(entities.folders).length,
})

const mapDispatch = dispatch => {
    return {
        fetchFolders: () => dispatch(fetchFolders())
    }
}

export default connect(mapState, mapDispatch)(DashboardBody);