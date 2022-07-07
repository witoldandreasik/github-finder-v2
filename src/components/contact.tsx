import React, { MouseEvent } from 'react';
import '../styles/landing.css';
import '../styles/repositoryComponents.css'

function Contact() {

    const handleSubmit = (event: MouseEvent) => {
        event.preventDefault();
        alert('Formularz to fake :)');
    }

    return (<div className="contact-info user-box">

        <div className="contact-inner-info">
            <h1>Contact me!</h1>
            <p>Witold Andreasik, Andrzej Chłodziński</p>
            <p>64042, 64057</p>
            <p>SP02</p>
            <p><b>Notice: Form is fake</b></p>
        </div>
        <form action="/" method="POST" className="contact-inner-info contact-form">
            <input type="text" placeholder='Imię' name="name" className="contact-input" required />
            <input type="email" placeholder='Email' name="email" className="contact-input" required />
            <textarea name="message" className="contact-input" placeholder='Wiadomość' required></textarea>
            <button type="submit" className="contact-submit" onClick={handleSubmit}>Wyślij</button>
        </form>

    </div>)

}
export default Contact