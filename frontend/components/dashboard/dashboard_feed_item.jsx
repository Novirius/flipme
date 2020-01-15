import React from 'react';
import {Link} from 'react-router-dom';

const DashboardFeedItem = props => (
    <Link to='/'>
        <div className="dashboard-body-feed-item">
            <span className="dashboard-body-feed-item-small">{props.folder.deck_ids.length} deck(s)</span>
            <div className="dashboard-body-feed-item-large">
                <i className="fas fa-folder fa-2x"></i>
                <span>{props.folder.title}</span>
            </div>
        </div>
    </Link>
)

export default DashboardFeedItem;