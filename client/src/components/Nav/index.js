import React, {useState} from 'react'
import {menuData} from '../../Data/NavData'
import {Link} from 'react-router-dom';
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
                    <Link className={ `nav  nav_button  nav_list-item nav_button-${item.title}`} to={item.link} key={index}>
                        {item.title}
                    </Link>
                ))}
            </ul>
        </nav>
    )
}

export default Nav
