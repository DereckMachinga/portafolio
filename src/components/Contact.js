import React from 'react';

const Contact = () => {
    return ( 
        <section className="section">
            <h2 className="title">Contact Me</h2>
            <h3 className="subtitle">Send your question</h3>
            <div className="contact">
                <div className="contact-section">
                    <div className="contact-section-info">
                        <div className="contact-section-data">
                            <a href="#!"><i className="uil uil-phone"></i>Dereck</a>
                        </div>
                        <div className="contact-section-data">
                            <a href="#!"><i className="uil uil-envelope-alt"></i>Dereck</a>
                        </div>
                        <div className="contact-section-data">
                            <a href="#!"><i className="uil uil-heart"></i>Dereck</a>
                        </div>
                    </div>
                </div>
                <div className="form-contact">
                    <form action="post">
                        <div className="form-two">
                            <input type="text" name="" id="" placeholder="Enter your name" />
                            <input type="text" name="" id="" placeholder="Enter your Last Name" />
                        </div>
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