import React from 'react';
import {Link} from 'react-router-dom';

const DashboardFeedItem = props => {
    let htmlElements;
    if (props.folder.deck_ids.length !== 0) {
        htmlElements = (
        <Link to={`/folders/${props.folder.id}/`}>
            <div className="dashboard-body-feed-item">
                <span className="dashboard-body-feed-item-small">{props.folder.deck_ids.length} deck(s)</span>
                <div className="dashboard-body-feed-item-large">
                    <i className="fas fa-folder fa-2x"></i>
                    <span>{props.folder.title}</span>
                </div>
            </div>
        </Link>
        )
    }
    else {
        htmlElements = (
        // <Link to={`/folders/${props.folder.id}/`}>
            <div className="dashboard-body-feed-item">
                <span className="dashboard-body-feed-item-small">{props.folder.deck_ids.length} deck(s)</span>
                <div className="dashboard-body-feed-item-large">
                    <i className="fas fa-folder fa-2x"></i>
                    <span>{props.folder.title}</span>
                </div>
            </div>
        // </Link>
        )
    }
    return (
        htmlElements
    )
}

export default DashboardFeedItem;