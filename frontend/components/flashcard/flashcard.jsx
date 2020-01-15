import React from 'react'

class Flashcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: 1,
            flip: ''
        }
        this.handleFlip = this.handleFlip.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
    }

    componentDidMount () {
        this.props.fetchCards(1);
        this.props.fetchDeck(1);
    }

    handleIncrement () {
        if (this.state.cardNumber < this.props.deckLength) {
            const nextNumber = (this.state.cardNumber) + 1
            this.setState ({
                cardNumber: nextNumber
            })
        }
    }

    handleDecrement () {
        if (this.state.cardNumber > 1) {
            const previousNumber = (this.state.cardNumber) - 1
            this.setState ({
                cardNumber: previousNumber
            })
        }
    }

    handleFlip () {
        if (this.state.flip === 'flip') {
            this.setState({
                flip: ''
            })
        } else {
            this.setState({
                flip: 'flip'
            })
        }
    }

    render () {
      if (!this.props.deck) return null;
        const cardIdsArray = this.props.deck.card_ids;
        const currentCardId = cardIdsArray[this.state.cardNumber-1];
        const currentCard = this.props.cards[currentCardId];

        return (
            <div className="flip-card-body">
                <div className={`flip-card`}  >
                    <div className={`flip-card-inner ${this.state.test}`} onClick={this.handleFlip}>
                        <div className="flip-card-front">
                            <p>{currentCard.front_text}</p>
                        </div>
                        <div className="flip-card-back">
                            <p>{currentCard.back_text}</p>
                        </div>
                    </div>
                </div>
                <div className="flashcard-show-dashboard-display-controls">
                    <button onClick={this.handleDecrement} type="button"><i className="fas fa-angle-left fa-2x"></i></button>
                    <span>{this.state.cardNumber}/{cardIdsArray.length}</span>
                    <button onClick={this.handleIncrement} type="button"><i className="fas fa-angle-right fa-2x"></i></button>
                </div>
            </div>

        )

    }
}

export default Flashcard;

// z

// ${this.state.test}