import React from 'react';
import "./style.css";
import { aboutData } from '../../Data/aboutData';

const About = () => {
    return (
        <div className={`about`}>
          {aboutData.map((item,index)=>(
            <h2 key={index}>{item.inc}</h2>
          ))}
          <h2>Welcome To Patricia Sprague Real Estate</h2> 
          Since 1987




        </div>
    )
}

export default About
