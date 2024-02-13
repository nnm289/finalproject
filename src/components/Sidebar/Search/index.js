import React from 'react'
import "./search.css";
const Search = ({ handleInputChange, query }) => {
  return <div className='search'>
    <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>

};

export default Search