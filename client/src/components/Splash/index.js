import React from 'react';
import { Card } from 'react-bootstrap';
import stock_minion_many from "../../Data/photos/stock_minion_many.jpg";
import "./style.css";

const Splash = () => {
    return (
        <div>
            <Card className={`splash`}>
                <Card.Img  className={`splash splash_img`} variant="top" src={stock_minion_many} />
                <Card.ImgOverlay className={`splash splash_overlay`}>
                    <Card.Title className={`splash splash_title`}>hello from inside card</Card.Title>
                    <Card.Text className={`splash splash_text`}>hello from inside card</Card.Text>
                </Card.ImgOverlay> 
            </Card>
        </div>
    )
}

export default Splash
