import React from 'react';

class DashboardHeader extends React.Component {
    constructor(props){
        super(props)
    }

    render () {
        return (
            <div className="dashboard-header-container">
                <i className="fas fa-user-circle fa-10x"></i>
                <div className="dashboard-header-profile-container">
                    <span>{this.props.currentUser.username}</span>
                    <div className="dashboard-header-profile-toggle-container">
                        <button type="button">Recent</button>
                        <button type="button">Created</button>
                        <button type="button">Studied</button>
                        <button type="button">Folders</button>
                    </div>
                </div>
            </div>
        )
    }

}

export default DashboardHeader;