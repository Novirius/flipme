import React from 'react';
import {Link} from 'react-router-dom';

import DeckContainer from '../deck/deck_container';

class Latest extends React.Component {
    constructor(props){
        super(props);

    }

    componentDidMount () {
        this.props.fetchUserDecks(this.props.currentUser.id);
    }

    render () {
        if(this.props.decks.length === 0) return null;
        const decksArray = [];
        for (let i = 0; (i < this.props.decks.length) || (i < 4);i++) {
            decksArray.push(this.props.decks[i])
        }
        return (
                <div className="latest-container">
                    <div className="latest-header">
                        <span className="latest-header-label">Recent</span>
                        <Link className="latest-header-viewall" to={`/users/${this.props.currentUser.id}/decks`}>View all <i className="fas fa-chevron-circle-right"></i></Link>
                    </div>

                        <div className="latest-body-decks">
                            {
                                decksArray.map(deck => <DeckContainer key={deck.id} deck={deck} />)
                            }
                        </div>
                </div>
        )
    }

}

export default Latest;