import React from 'react';
import { BiSearch } from "react-icons/bi";
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='input_wrapper'>
        <BiSearch id='search-icon' />
        <input placeholder='Search' className='input'/>
    </div>
  )
}

export default SearchBar;