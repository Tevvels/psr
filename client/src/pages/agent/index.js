import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {agents} from "../../Data/agentData";
import "../agent/style.css";
import stock_minion_confused from "../../Data/photos/stock_minion_confused.jpeg";
const house = require('../../Data/houseData.json')
const Agent = () => {
let agentValue = 0;

const Toggle = (a) => {
    agentValue = a;

    let desc = document.querySelector('.agents_desc');
    desc.innerHTML =  `                
    <img class="agents_desc-img"></img>
    <div class="flex_column">
        <h2 class="agents_desc-header">${agents[agentValue].name} </h2>
        <div class="flex_row agents_desc-contact">
            <div class="agents_desc-email">${agents[agentValue].contact.email}</div>
            <div class="agents_desc-cell">${agents[agentValue].contact.cell}</div>
            <div class="agents_desc-img">${agents[agentValue].name}</div>
    </div>
    <div class="agents_desc-content">${agents[agentValue].desc}</div>
    </div>

`

 


}




    return (
        <div className={`agents`} id={`Agent`}>
            
            
            <h2 className={`hd-primary-400`}>Meet our Agents</h2>
            
            <div className={`agents_desc`}>

            </div>    

                <div className={`flex_row  agents_container`}>
                {agents.map((item,index) =>(
                    <div  key={index} className={`agents_agent`} onClick={()=>(
                        Toggle(index),
                        console.log(agentValue)
                    )}>
                        
                            <div>
                            <img  className={`agents_img`} src={stock_minion_confused}></img>
                            </div>
                                <div className={`agents_contact`}>
                                        <h2 className={`agents_contact-name`}>{item.name}</h2>

                                    <p className={`agents_contact-email`}>     
                                    Email: {item.contact.email}</p>
                                    
                                    <p className={`agents_contact-cell`}>
                                    Cell: {item.contact.cell}</p>

                                </div>
                            {/* </div> */}
                        {/* </Col> */}

                        {/* <div xs={`6`} className={`cols_desc`}>{item.desc}</div> */}
                        
                    </div>
                ))}
                </div>
        </div>

    )
}
 
export default Agent
