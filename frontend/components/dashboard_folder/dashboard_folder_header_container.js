import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchFolder} from '../../actions/folder_actions'
import DashboardFolderHeader from './dashboard_folder_header'

const mapState = ({entities:{folders, users}, session}, ownProps) => {
    debugger;
    return {
        folder: folders[ownProps.match.params.folderId],
        folderId: ownProps.match.params.folderId,
        currentUser: users[session.id]
    }
}

const mapDispatch = dispatch => {
    return {
        fetchFolder: (folderId) => dispatch(fetchFolder(folderId))
    }
}

export default withRouter(connect(mapState, mapDispatch)(DashboardFolderHeader));