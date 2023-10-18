import React from 'react';


import 
 {  BsJustify}
 from 'react-icons/bs';
 import { RiSearchLine } from 'react-icons/ri';
 


function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <h3>Hello Shahrukh 👋,</h3>
        </div>
        <div className='header-right'>
            <RiSearchLine className="search-icon" />
            <input placeholder='Search' type='search' className='search'/>
        </div>
    </header>
  )
}

export default Header