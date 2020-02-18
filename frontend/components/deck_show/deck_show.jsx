import React from 'react';
import {Link} from 'react-router-dom';

import CardFormContainer from '../card_form/card_form_container';
import CardIndexItemContainer from '../card_index_item/card_index_item_container';

class DeckShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchDeck(this.props.deckId);
        // debugger;
        this.props.fetchCards(this.props.deckId);
    }
    

    render () {
        if (Object.keys(this.props.cards).length === 0) return null;
        if (!this.props.cardsArray) return null;
        if (!this.props.deck) return null;
        debugger;
        return (
            <div className="deck-show">
                <div className="deck-show-title">
                    <span>{this.props.deck.title}</span>
                </div>
                <div className="deck-show-index">
                    {
                        this.props.cardsArray.map(card => <CardIndexItemContainer key={card.id} card={card} />)
                    }
                </div>
                <CardFormContainer deckId={this.props.deckId} />
            </div>

        )
    }
}

export default DeckShow