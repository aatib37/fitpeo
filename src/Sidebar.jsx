import React from 'react'
import logo from './profile.jpg'
import 
{BsFillGrid1X2Fill, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, 
  BsWallet2}
 from 'react-icons/bs'
 import { CiDiscount1 } from "react-icons/ci";
 import { BiHelpCircle  } from "react-icons/bi";
 import { FaAngleRight,FaAngleDown } from "react-icons/fa6";
 

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsFillGrid1X2Fill className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="" className='grater-item' >
                    <div><BsGrid1X2Fill className='icon'/> Dashboard</div>
                    <div><FaAngleRight  /></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='grater-item' >
                    <div> <BsFillArchiveFill className='icon'/> Products</div>
                    <div> <FaAngleRight /></div>
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="" className='grater-item'>
                    <div><BsPeopleFill className='icon'/> Customers</div>
                    <div><FaAngleRight  /></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=""  className='grater-item'>
                    <div><BsWallet2 className='icon'/> Income</div>
                    <div><FaAngleRight /></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='grater-item'>
                    <div><CiDiscount1 className='icon'/> Promote</div>
                    <div><FaAngleRight  /></div>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="" className='grater-item'>
                    <div><BiHelpCircle className='icon'/> Help</div>
                    <div><FaAngleRight  /></div>
                </a>
            </li>
        </ul>
        <div className='tag-profile'>
        <div  className='tag-profile1'>
            <img src= {logo} alt='profile image'/>
            <div className='name'>
                <h3>Evano</h3>
                <p>Project Manager</p>
            </div>
            
        </div>
        <FaAngleDown className='down-icon' />
            
        </div>
    </aside>
    )
}

export default Sidebar