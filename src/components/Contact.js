import React from 'react';

const Contact = () => {
    return ( 
        <section className="section">
            <h2 className="title">Contact Me</h2>
            <h3 className="subtitle">Send your question</h3>
            <div className="contact">
                <div className="contact-section">
                    <a href="#!">Dereck</a>
                </div>
                <div className="form-contact">
                    <form action="post">
                        <label htmlFor="">Enter your Name</label>
                        <input type="text" name="" id="" placeholder="Enter your name" />
                        <label htmlFor="">Enter your Last Name</label>
                        <input type="text" name="" id="" placeholder="Enter your Last Name" />
                        <label htmlFor="">Enter your Email</label>
                        <input type="email" name="" id="" placeholder="Enter your email" />
                        <label htmlFor="">Enter your Message</label>
                        <textarea name="Message" id="" cols="30" rows="10"></textarea>
                    </form>
                        <a href="#!" className="btn btn-01 btn-contact">Enviar <i className="uil uil-message uil-message-contact"></i></a>
                </div>
            </div>
        </section>
    );
}

export default Contact;