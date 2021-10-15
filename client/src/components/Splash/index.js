import React from 'react';
import { Card } from 'react-bootstrap';
import stock_minion_many from "../../Data/photos/stock_minion_many.jpg";
import "./style.css";
import {aboutData} from "../../Data/aboutData.js"
const Splash = () => {
    return (
        <div>
            <Card className={`splash`}>
                <Card.Img  className={`splash splash_img`} variant="top" src={stock_minion_many} />
                {/* <Card.ImgOverlay className={`splash splash_overlay`}>
                    <Card.Title className={`splash splash_title`}>{aboutData[0].inc}</Card.Title>
                    <Card.Text className={`splash splash_text`}>hello from inside card</Card.Text>
                </Card.ImgOverlay>  */}
            </Card>
        </div>
    )
}

export default Splash;
