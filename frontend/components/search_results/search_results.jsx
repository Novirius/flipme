import React from 'react';
import SearchResultIndexItemContainer from './search_results_index_item_container';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      decks: '',
      render: false,
      searchQuery: this.props.searchQuery
    }
  }

  componentDidMount() {
    this.props.searchDecks(this.props.searchQuery).then(() => this.setState({render: true}))
  }

  componentDidUpdate () {
    if (this.state.searchQuery !== this.props.searchQuery) {
      this.setState({
        searchQuery: this.props.searchQuery
      })
      this.props.searchDecks(this.props.searchQuery)
    }
  }

  render() {
    if (!this.state.render) return null
    return (
        <div className="search-result-container">
            {
              this.props.decks.map((deck, i) => <SearchResultIndexItemContainer key={i} deck={deck}></SearchResultIndexItemContainer>)
            }
        </div>
    )
  }
}

export default SearchResults;