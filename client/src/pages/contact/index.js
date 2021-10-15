import React from 'react';
import { useState } from 'react';
import './style.css';

const  toggleContact =  () =>{
    let contactPage = document.querySelector('.contact');
    let hide = document.querySelector(`.hide`);
    contactPage.classList.toggle("hideContact");
    hide.classList.toggle("showButton");
}

// let hideButton = document.querySelector(".hide");
// hideButton.addEventListener("click",()=>{
//     toggleContact();
// })

const Contact = () => {
    const [open,useOpen] = useState(false);
    const Toggles = () =>{
        useOpen( prev => !prev);
        toggleContact();
    }


    return (
        <div className={`contact`}>
            <button onClick={Toggles} className={`hide`} >{open ? "Contact Us": "<--" }</button>
            <h2 className={`contact_header`}>Leave a message</h2>
            <div className={`contact_subcol`}>
                <input type={`text`} placeholder={`name`} className={`contact_input contact_name`}></input>
                <input type={`text`} placeholder={`phone`} className={`contact_input contact_phone`}></input>
            </div>
            <input type={`email`} placeholder={`email`} className={`contact_input contact_email`}></input>
            <textarea 
            placeholder={`leave us a message, what you would want`}
            className={` contact_message`}
            ></textarea>
            <input type={`submit`} className={`contact_submit`} />
        </div>
    )
}

export default Contact
