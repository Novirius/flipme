import React from 'react';
import {Link} from 'react-router-dom'

class DashboardFolderHeader extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchFolder(this.props.folderId);
    }

    render () {
        if (!this.props.folder) return null;
        if (!this.props.folder.title) return null;
        return (
            <div className="dashboard-header-container">
                <i className="fas fa-folder fa-10x"></i>
                <div className="dashboard-header-profile-container">
                    <span>{this.props.folder.title}</span>
                    <div className="dashboard-header-profile-toggle-container">
                        <button type="button"><Link to='/latest'>Recent</Link></button>
                        
                        <button type="button"><Link to={`/users/${this.props.currentUser.id}/decks`}>Created</Link></button>
                        <button type="button"><Link to={`/users/${this.props.currentUser.id}/decks`}>Studied</Link></button>
                        <button type="button"><Link to={`/users/${this.props.currentUser.id}/folders`}>Folders</Link></button>
                    </div>
                </div>
            </div>
        )
    }

}

export default DashboardFolderHeader;