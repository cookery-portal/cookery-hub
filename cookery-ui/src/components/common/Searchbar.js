import React from "react";

import '../../assets/css/Searchbar.css'


const Searchbar = () => {
  return (
    <div className='searchbar'>
        <input className="serachbar-input" type="text" placeholder="Search a dish ,I will show you the recipe " aria-label="Search" />
        <button className='searchbar-button' type="submit">
          Search
        </button>
    </div>
  );
}

export default Searchbar;