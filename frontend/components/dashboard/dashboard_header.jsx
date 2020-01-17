import React from 'react';
import {Link} from 'react-router-dom'

class DashboardHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        if (!this.props.currentUser) return null;
        return (
            <div className="dashboard-header-container">
                <i className="fas fa-user-circle fa-10x"></i>
                <div className="dashboard-header-profile-container">
                    <span>{this.props.currentUser.username}</span>
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

export default DashboardHeader;