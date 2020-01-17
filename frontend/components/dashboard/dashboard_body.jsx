import React from 'react';

import DashboardFeedItem from './dashboard_feed_item'

class DashboardBody extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            sort: 'Recent'
        })
        this.sortMethod = this.sortMethod.bind(this)

    }

    componentDidMount () {
        this.props.fetchFolders();
    }

    sortMethod (e) {
        this.setState({
            sort: e.currentTarget.value
        })
    }

    render () {
        // const compareDate = (a, b) => {
        //     const idA = a.id
        //     const idB = b.id

        //     let comparison = 0;
        //     idA > idB ? comparison = -1 : comparison = 1;
        //     return comparison;
        // }
        // const compareName = (a, b) => {
        //     const titleA = a.title.toUpperCase();
        //     const titleB = b.title.toUpperCase();

        //     let comparison = 0;
        //     titleA > titleB ? comparison = 1 : comparison = -1;
        //     return comparison;
        // }
        // const unsortedFolders = this.props.folders.sort(compareDate);
        // const sortedFolders = this.props.folders.sort(compareName);
        // let selectedFolders = (this.state.sort === 'Alphabetically') ? this.props.folders : this.props.folders;
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
                                    <select onChange={this.sortMethod}>
                                        <option value="Recent">Recent</option>
                                        <option value="Alphabetically">Alphabetically</option>
                                    </select>
                                </div>
                            </div>
                            <div className="dashboard-body-controls-filter">
                                <input type="text" placeholder="Type to filter" className="dashboard-body-controls-filter" />
                            </div>
                        </div>
                        <div className="dashboard-body-feed">
                            {
                                this.props.folders.map(folder => <DashboardFeedItem key={folder.id} folder={folder}/>)
                            }
                        </div>
                </div>
                <div className="dashboard-body-ads-container">

                </div>          
            </div>
        )
    }

}

export default DashboardBody;