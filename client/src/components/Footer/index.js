import React from 'react';
import { aboutData } from '../../Data/aboutData';
import "./style.css";
const Footer = () => {
    return (
        <div className={`footer`}>
            {aboutData.map((item,index) =>(
            <ul key={index} className={`footer footer_list`}>
                <li className={`footer footer_inc`}>{item.inc}</li>
                <li className={`footer footer_address`}>{item.address}</li>
                <li className={`footer footer_phone`}>{item.phone}</li>
                <li className={`footer footer_email`}>{item.email}</li>
            </ul>
            ))}
        </div>
    )
}

export default Footer
