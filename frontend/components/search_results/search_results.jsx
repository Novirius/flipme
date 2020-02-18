import React from 'react';
import SearchResultIndexItem from './search_results_index_item_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: ''
    }
  }

  componentDidMount() {
    this.props.searchDecks(this.props.searchQuery)
  }

  componentDidUpdate () {
    // this.props.searchDecks(this.props.searchQuery)
  }

  render() {
    return (
        <div>
          <ul>
            {
              this.props.decks.map((deck, i) => <SearchResultIndexItem key={i} deck={deck}/>)
            }
          </ul>
        </div>
    )
  }
}

export default SearchResults;