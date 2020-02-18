import React from 'react';

class SearchResultsIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    this.props.fetchCards(this.props.deck.id)
  }

  componentDidUpdate () {
    // this.props.fetchCards(this.props.deck.id)
  }

  render() {
    if (Object.keys(this.props.cards).length === 0) return null
    let cardPreview = this.props.cards.slice(0,4)
    return (
        <div>
            <span>{cardPreview[0].front_text}</span>
            <span>{cardPreview[1].front_text}</span>
            <span>{cardPreview[2].front_text}</span>
        </div>
    )
  }
}

export default SearchResultsIndexItem;