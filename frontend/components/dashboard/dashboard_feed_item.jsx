import React from 'react';
import {Link} from 'react-router-dom';

const DashboardFeedItem = ({folder}) => {
    let htmlElements;
    if (folder.deck_ids.length !== 0) {
        htmlElements = (
        <Link to={`/folders/${folder.id}/`}>
            <div className="dashboard-body-feed-item">
                <span className="dashboard-body-feed-item-small">{folder.deck_ids.length} deck(s)</span>
                <div className="dashboard-body-feed-item-large">
                    <i className="fas fa-folder fa-2x"></i>
                    <span>{folder.title}</span>
                </div>
            </div>
        </Link>
        )
    }
    else {
        htmlElements = (
            <div className="dashboard-body-feed-item">
                <span className="dashboard-body-feed-item-small">{folder.deck_ids.length} deck(s)</span>
                <div className="dashboard-body-feed-item-large">
                    <i className="fas fa-folder fa-2x"></i>
                    <span>{folder.title}</span>
                </div>
            </div>
        )
    }
    return (
        htmlElements
    )
}

export default DashboardFeedItem;