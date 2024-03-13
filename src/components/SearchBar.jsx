// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
function SearchBar({keyword,keywordChange}){
    const { locale } = React.useContext(LocaleContext);
    return(
        <input className="search" type="text" placeholder={locale === 'id' ? 'Cari Judul' : 'Search Title'}
        value={keyword} onChange={(event)=> keywordChange(event.target.value)}
        />
        )
}

SearchBar.propTypes={
    keyword:PropTypes.string,
    keywordChange:PropTypes.func
}

export default SearchBar;