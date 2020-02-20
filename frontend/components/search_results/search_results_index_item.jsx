import React from 'react';
import SearchResultItemCard from './search_result_item_card';
import {Link} from 'react-router-dom';

class SearchResultsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.sampleCardsArray = [];
    this.state = {
      deckId: -1,
      cardId: null,
      readyToRender: false,
      cardPreviewIndex: 0
    }
  }

  componentDidMount() {
    const promises = [this.props.fetchCards(this.props.deck.id), this.props.fetchUsers()]
    Promise.all(promises).then(() => this.setState({ readyToRender: true }))
  }

  componentDidUpdate () {
    if (this.state.deckId !== this.props.deck.id) {
      this.setState({
        deckId: this.props.deck.id
      })
      this.props.fetchCards(this.props.deck.id)
    }
    setInterval
  }

  handleChangeCard () {
    this.setState({cardPreviewIndex: this.state.cardPreviewIndex + 1})
  }

  render() {
    if (!this.state.readyToRender || this.props.cards.length < 1) {
      return null
    }
    else {
      const sampleCardsArray = this.props.cards.slice(0,3)
      const cardFrontPreview = sampleCardsArray[this.state.cardPreviewIndex].front_text
      const cardBackPreview = sampleCardsArray[this.state.cardPreviewIndex].back_text
      return (
        <Link to={`/decks/${this.props.deck.id}/flashcard`} className="search-result-card">
          <div className="search-result-card-left">
            <div className="search-result-card-left-top-container">
              <div className="search-result-card-left-top-terms">
                <span>{this.props.deck.card_ids.length} Terms</span>
              </div>
              <span className="search-result-card-left-top-div">|</span>
              <div className="search-result-card-left-top-author">
                <span>{this.props.users[this.props.deck.author_id].username}</span>
              </div>
            </div>
            <div className="search-result-card-left-bottom-container">
              <span>{this.props.deck.title}</span>
            </div>
          </div>
          <div className="search-result-card-right">
            <div className="search-result-card-front">
              <span></span>
            </div>
            <div className="search-result-card-back">
              <span></span>
            </div>
            <SearchResultItemCard front={cardFrontPreview} back={cardBackPreview}/>
          </div>
        </Link>
      )
    }
  }
}

export default SearchResultsIndexItem;