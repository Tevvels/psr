import React from 'react'
// import Card from '../../components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,ListGroup, ListGroupItem, CardGroup} from 'react-bootstrap';
import { Alert,Container, Row, Col} from 'react-bootstrap';
import {agents} from "../../Data/agentData";
import "../agent/style.css";
import stock_minion from "../../Data/photos/stock_minion.jpg";
import stock_minion_confused from "../../Data/photos/stock_minion_confused.jpeg";
const house = require('../../Data/houseData.json')
const Agent = () => {





    return (
        <div id={`Agent`}>

            <Container className={`agent`} fluid>
                <h2>Meet our Agents</h2>
                {agents.map((item,index) =>(
                    <Row key={index} className={`cols`}>
                        {/* <Col xs={`auto`} className={`cols_subdivision `}> */}
                            {/* <Row> */}
                            <img className={`cols_image`} src={stock_minion_confused}></img>
                                <Col className={`cols_subColumn`}>


                                    <Row>
                                        <h2 className={`cols_name`}>{item.name}</h2>
                                    </Row>
                                    <Row>
                                    </Row>
                                    <Row>
                                    Email: <p className={`cols_contact`}>{item.contact.email}</p>
                                    </Row>
                                    <Row>
                                    Cell: <p className={`cols_contact`}>{item.contact.cell}</p>
                                    </Row>
                                    <Row>
                                    Office Phone:<p className={`cols_contact`}>{item.contact.office}</p>
                                    </Row>
                                </Col>
                            {/* </Row> */}
                        {/* </Col> */}

                        <Col xs={`6`} className={`cols_desc`}>{item.desc}</Col>
                        
                    </Row>
                ))}
            </Container>




        </div>

    )
}
 
export default Agent
