import React from 'react';
import FormContact from './FormContact';
import ContactIMG from '../../img/undraw_Texting_re_l11n.svg';
const Contact = () => {
    return ( 
        <section className="section" id="contact">
            <h2 className="title">Contact Me</h2>
            <h3 className="subtitle">Send your question</h3>
            <div className="contact">
                <div className="contact-section">
                    <div className="contact-section-info">
                        <img src={ContactIMG} alt="Imagen de contacto" />
                    </div>
                </div>
                <FormContact/>
            </div>
        </section>
    );
}

export default Contact;