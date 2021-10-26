import React, {useState} from 'react'
import {menuData} from '../../Data/NavData'
import './style.css' 
const Nav = () => {

    const [navbarOpen,setNavbar] = useState(false);
    const handleToggle = () => {
        setNavbar(prev => !prev);
    }
    return (
        <nav className={`nav`}>
           <ul className={` nav nav_list`}>
                {menuData.map((item, index)=>(
                    <a className={ `  nav_button  nav_list-item nav_button-${item.title}`} href={`#${item.link}`} key={index}>
                        {item.title}
                    </a>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
