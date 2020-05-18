import React from 'react';

import DashboardFeedItem from './dashboard_feed_item'

class DashboardBody extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            sort: 'Recent',
            filter: ''
        })
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentDidMount () {
        this.props.fetchFolders();
    }

    sortMethod = (e) => {
        this.setState({
            sort: e.currentTarget.value
        })
    }

    updateFilter(e) {
        this.setState({
            filter: e.currentTarget.value
        })
    }

    render () {
        //Sort folders by most recent
        const sortRecent = (a, b) => {
            const aId = a.id;
            const bId = b.id;

            return (aId < bId) ? -1 : (aId > bId) ? 1 : 0;
        }

        const recentFolders = this.props.folders.slice().sort(sortRecent)

        //Sort folders by title
        const sortAlphabetically = (a, b) => {
            const aTitle = a.title.toUpperCase();
            const bTitle = b.title.toUpperCase();
            return (aTitle < bTitle) ? -1 : (aTitle > bTitle) ? 1 : 0; 
        }
        const alphabeticalFolders = this.props.folders.slice().sort(sortAlphabetically)
        
        //Return the sort order based on selected sort from dropdown menu
        const foldersIndex = (this.state.sort === 'Recent') ? recentFolders.filter(folder => folder.title.toUpperCase().includes(this.state.filter.toUpperCase())) : alphabeticalFolders.filter(folder => folder.title.toUpperCase().includes(this.state.filter.toUpperCase()))

        return (
            <div className="dashboard-body-container">
                <div className="dashboard-body-content-container">
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
                                <input 
                                    type="text" 
                                    placeholder="Type to filter" 
                                    className="dashboard-body-controls-filter"
                                    onChange={this.updateFilter}
                                    />
                            </div>
                        </div>
                        <div className="dashboard-body-feed">
                            {
                                foldersIndex.map(folder => <DashboardFeedItem key={folder.id} folder={folder}/>)
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