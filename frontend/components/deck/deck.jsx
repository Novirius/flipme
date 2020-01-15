import React from 'react';
import {Link} from 'react-router-dom';

class Deck extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchUsers();
        this.props.fetchCards(this.props.deck.id);
    }

    render () {
        if (!this.props.cardsCount) return null;
        return (
            <div className="deck-container">
            <div className="deck-details">
                    <div className="deck-details-top">
                        <span className="deck-details-title">{this.props.deck.title}</span>
                        <span className="deck-details-count">{this.props.cardsCount}</span>
                    </div>
                    <span className="deck-details-author">{this.props.users[this.props.deck.author_id].username}</span>
                </div>
                <div className="deck-image">
                    <img className="niceimg" src={window.dlmnice}/>
                </div>
            </div>
        )
    }
}

export default Deck