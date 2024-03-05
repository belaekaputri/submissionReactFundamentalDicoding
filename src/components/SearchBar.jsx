// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function SearchBar({keyword,keywordChange}){
    return(
        <input className="search" type="text" placeholder='Search Title'
        value={keyword} onChange={(event)=> keywordChange(event.target.value)}
        />
        )
}

SearchBar.propTypes={
    keyword:PropTypes.string,
    keywordChange:PropTypes.func
}

export default SearchBar;