import React from 'react'
import Link from 'react'
import stockminion from "../../Data/photos/stock_minion.jpg";
import "./style.css";
const Community = () => {
    return (
        <div>
            <div className={`community community_arts`}>
                <h2 className={`community_arts comunity_h2`}> Arts in Ashland</h2>
                <a className={`community_a community_arts`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_arts`} >shakespear festival</p>
                </a>
                
                <a className={`community_a community_arts`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_arts`}>shakespear festival</p>
                </a>
            </div>     
            <img className={`community_img community_arts-img`} src={stockminion}/>
            <div className={`community community_rec`}>
                <h2 className={`community_rec comunity_h2`}> rec in Ashland</h2>
                <a className={`community_a community_rec`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_rec`} >shakespear festival</p>
                </a>
                
                <a className={`community_a community_rec`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_rec`}>shakespear festival</p>
                </a>
            </div>     
            <img className={`community_img community_rec-img`} src={stockminion}/>
            <div className={`community community_history`}>
                <h2 className={`community_history comunity_h2`}> history in Ashland</h2>
                <a className={`community_a community_history`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_history`} >shakespear festival</p>
                </a>
                
                <a className={`community_a community_history`} href={"https://www.osfashland.org/"} target={`_blank`}>
                    <p className={`community_p community_history`}>shakespear festival</p>
                </a>
                
            </div>     
            <img className={`community_img community_history-img`} src={stockminion}/>

        </div>
    )
}

export default Community
