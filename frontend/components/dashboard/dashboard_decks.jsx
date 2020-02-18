import React from 'react';

import DashboardDeckItemContainer from './dashboard_deck_item_container'

class DashboardDecks extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            sort: 'Recent',
            filter: ''
        })
        this.sortMethod = this.sortMethod.bind(this);
        this.updateFilter = this.updateFilter.bind(this);
    }

    componentDidMount () {
        this.props.fetchUserDecks(this.props.currentUser.id);
    }

    sortMethod (e) {
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

        //Sort decks by most recent
        const sortRecent = (a, b) => {
            const aId = a.id;
            const bId = b.id;

            return (aId < bId) ? -1 : (aId > bId) ? 1 : 0;
        }

        const recentDecks = this.props.decks.slice().sort(sortRecent)

        //Sort decks by title
        const sortAlphabetically = (a, b) => {
            const aTitle = a.title.toUpperCase();
            const bTitle = b.title.toUpperCase();
            return (aTitle < bTitle) ? -1 : (aTitle > bTitle) ? 1 : 0; 
        }
        const alphabeticalDecks = this.props.decks.slice().sort(sortAlphabetically)

        //Return the sort order based on selected sort from dropdown menu
        const decksIndex = (this.state.sort === 'Recent') ? recentDecks.filter(deck => deck.title.toUpperCase().includes(this.state.filter.toUpperCase())) : alphabeticalDecks.filter(deck => deck.title.toUpperCase().includes(this.state.filter.toUpperCase()))

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
                                decksIndex.map(deck => <DashboardDeckItemContainer key={deck.id} deck={deck}/>)
                            }
                        </div>
                </div>
                <div className="dashboard-body-ads-container">

                </div>          
            </div>
        )
    }

}

export default DashboardDecks;