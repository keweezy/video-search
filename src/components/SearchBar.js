import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term)
     
  };

  return (
    <div className="search-bar ui segment" style={{backgroundColor:'#c5bebe'}}>
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          {/* <label>Search for a video</label> */}
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value )}
            placeholder='search any video'
          />
        </div>
      </form>
    </div>
  );

}

export default SearchBar;
