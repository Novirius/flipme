import React from 'react'

class Flashcard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: 1,
            flip: '',
            move: ''
        }
        this.handleFlip = this.handleFlip.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleMoveLeft = this.handleMoveLeft.bind(this);
    }

    componentDidMount () {
        this.props.fetchDeck(this.props.match.params.deckId);
        this.props.fetchCards(this.props.deck.id);
    }

    handleIncrement (e) {
        e.stopPropagation();
        if (this.state.cardNumber < this.props.deck.card_ids.length) {
            let nextNumber = (this.state.cardNumber) + 1
            this.setState ({
                cardNumber: nextNumber,
                flip: ''
            })
            this.handleMoveLeft();
        }
    }

    handleDecrement (e) {
        e.stopPropagation();
        if (this.state.cardNumber > 1) {
            let previousNumber = (this.state.cardNumber) - 1
            this.setState ({
                cardNumber: previousNumber,
                flip: ''
            })
            this.handleMoveRight();
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

    handleMoveLeft () {
        if (this.state.flip === 'flip') {
            this.setState({
                move: 'move-left-back'
            })
        }
        else {
            this.setState({
                move: 'move-left-front'
            }) 
        }
        setTimeout(() => this.setState({
            move: ''
        }),300)
    }

    handleMoveRight () {
        if (this.state.flip === 'flip') {
            this.setState({
                move: 'move-right-back'
            })
        }
        else {
            this.setState({
                move: 'move-right-front'
            }) 
        }

        setTimeout(() => this.setState({
            move: ''
        }),300)
    }

    render () {
    
      if (!this.props.deck) return null;
        let cardIdsArray = this.props.deck.card_ids;
        let currentCardId = cardIdsArray[this.state.cardNumber-1];
        let currentCard = this.props.cards[currentCardId];

        return (
            <div className="flip-card-body">
                <div className={`flip-card`}  >
                    <div className={`flip-card-inner ${this.state.flip} ${this.state.move}`} onClick={this.handleFlip}>
                        <div className={`flip-card-front ${this.state.move}`}>
                            <p>{currentCard.front_text}</p>
                        </div>
                        <div className={`flip-card-back ${this.state.move}`}>
                            <img src={`${currentCard.back_image}`} alt=""/>
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

 {/* <img className="flip-card-front-image" src={`${currentCard.front_image}`} alt=""/> */}
