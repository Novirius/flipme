import React from 'react';

const SearchResultItemCard = props => (
    <div className="search-result-card-right-float">
        <div className="search-result-card-front-float">
            <span>{props.front}</span>
        </div>
        <div className="search-result-card-back-float">
            <span>{props.back}</span>
        </div>
    </div>
)

export default SearchResultItemCard