import React, {useState, useEffect} from 'react';

import DashboardDeckItemContainer from './dashboard_deck_item_container'

// class DashboardDecks extends React.Component {
const DashboardDecks = ({fetchUserDecks, currentUser, decks}) => {
    //Get user's decks from database
    useEffect(() => {
        fetchUserDecks(currentUser.id);
    })

    //Sort decks
    const [sort, setSort] = useState('Recent');
    const sortRecent = (a, b) => {
        return (a.id < b.id) ? -1 : 1;
    }
    const sortAlphabetically = (a, b) => {
        const aTitle = a.title.toUpperCase();
        const bTitle = b.title.toUpperCase();
        return (aTitle < bTitle) ? -1 : 1;
    }
    const sortedDecks = (sort === 'Recent') ? decks.slice().sort(sortRecent) : decks.slice().sort(sortAlphabetically)

    //Filter decks
    const [filter, setFilter] = useState('')
    const decksIndex = sortedDecks.filter(deck => deck.title.toUpperCase().includes(filter.toUpperCase()))

    //Display HTML Elements
    return (
        <div className="dashboard-body-container">
            <div className="dashboard-body-content-container">
                    <div className="dashboard-body-controls-container">
                        <div className="dashboard-body-controls-sort-container">
                            <div className="dashboard-body-controls-sort-label">
                                <span>Sort</span>
                            </div>
                            <div className="dashboard-body-controls-sort-dropdown">
                                <select onChange={(e) => setSort(e.currentTarget.value)}>
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
                            onChange={(e) => setFilter(e.currentTarget.value)}
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

export default DashboardDecks;