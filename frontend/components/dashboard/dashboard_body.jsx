import React from 'react';

import DashboardFeedItem from './dashboard_feed_item'

class DashboardBody extends React.Component {
    constructor(props){
        super(props);

    }

    // componentDidMount () {
    //     const {fetchFolders} = this.props.fetchFolders
    //     fetchFolders();
    // }

    render () {
        return (
            <div className="dashboard-body-container">
                <div className="dashboard-body-content-container">
                        {/* Padding 40 */}
                        <div className="dashboard-body-controls-container">
                            <div className="dashboard-body-controls-sort-container">
                                <div className="dashboard-body-controls-sort-label">
                                    <span>Sort</span>
                                </div>
                                <div className="dashboard-body-controls-sort-dropdown">
                                    <select>
                                        <option value="recent">Recent</option>
                                        <option value="alphabetically">Alphabetically</option>
                                    </select>
                                </div>
                            </div>
                            <div className="dashboard-body-controls-filter">
                                <input type="text" placeholder="Type to filter" className="dashboard-body-controls-filter" />
                            </div>
                        </div>
                        <div className="dashboard-body-feed">
                            {/* {
                                this.props.folders.map(folder => <DashboardFeedItem title={folder.title}/>)
                            } */}
                        </div>
                </div>
                <div className="dashboard-body-ads-container">

                </div>          
            </div>
        )
    }

}

export default DashboardBody;