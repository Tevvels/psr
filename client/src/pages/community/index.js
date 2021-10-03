import React from 'react'
import stockminion from "../../Data/photos/stock_minion.jpg";
import { Alert,Container, Row, Col} from 'react-bootstrap';
import { community } from '../../Data/communityData';

import "./style.css";

const Community = () => {
    return (
    <>
            <h2>Our Community </h2>

        <Container className={`community`}>
        {community.map((item,index)=>(
            <Row key={index} className={`community community_${item.ref}`}>
                <Row >


                  
                    <Col className={` community_sub community_${item.ref}`}>
                    <h2 className={`community_${item.ref} community_h2`}> {item.title}</h2>
                {item.what.map((i,index)=>(
                        <a key={index} className={`community_a`} href={i.link} target={`_blank`}>
                            <p className={`community_p community_${item.ref}`} >{i.name}</p>
                        </a>
                ))}
                </Col> 
                <img className={`community_img community_${item.ref}-img`} src={stockminion}/>
            </Row>    
        </Row>              
            ))}
            {/* <Row>
                <Col className={`community community_sub community_arts`}>
                    <h2 className={`community_arts comunity_h2`}> Arts in Ashland</h2>
                    <a className={`community_a`} href={"https://www.osfashland.org/"} target={`_blank`}>
                        <p className={`community_p community_arts`} >shakespear festival</p>
                    </a>
                    
                    <a className={`community_a community_arts`} href={"https://www.osfashland.org/"} target={`_blank`}>
                        <p className={`community_p community_arts`}>shakespear festival</p>
                    </a>
                </Col>
                 <Col>
                    <img className={`community_img community_arts-img`} src={stockminion}/>
                </Col>
            </Row>             
            <Row className={`community community_sub community_rec`}>
                <Col>
                <h2 className={`community_rec comunity_h2`}> rec in Ashland</h2>
                <a className={`community_a community_rec`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_rec`} >shakespear festival</p>
                </a>
                
                <a className={`community_a community_rec`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_rec`}>shakespear festival</p>
                </a>
                </Col>
                <Col>
            <img className={`community_img community_rec-img`} src={stockminion}/>
                 </Col>
                 </Row>     
            
            <Row className={`community community_sub community_history`}>
                <Col>
                <h2 className={`community_history comunity_h2`}> history in Ashland</h2>
                <a className={`community_a community_history`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_history`} >shakespear festival</p>
                </a>
                
                <a className={`community_a community_history`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_history`}>shakespear festival</p>
                </a>
                </Col>
                <Col>
                   <img className={`community_img community_history-img`} src={stockminion}/>
                </Col>
            </Row>      */}

        </Container>
   </>
    )

}

export default Community
