import "./style.css"
const Card = () => {
    return (
        <section className={`card`}>
            <img className={`card card_img`} placeholder={`image goes here`}></img>
            <p className={`card card_p card_p-email`}>email</p>
            <p className={`card card_p card_p-phone`}>phone:#</p>
            <h2 className={`card card_h2 card_h2-name`}>Patricia Sprague</h2>
            <h2 className={`card card_h2 card_h2-title`}>Principal Broker/Owner</h2>
            <p className={`card card_p card_p-desc`}>here is going to be the description of the agent</p>
        </section>
    )
}

export default Card
