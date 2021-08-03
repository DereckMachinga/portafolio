import React from 'react';

const FormContact = () => {
    return ( 
            <div className="form-contact">
                    <form action="post">
                        <div className="form-two">
                            <input type="text" id="nombre" placeholder="Your name" />
                            <input type="text" id="apellido" placeholder="Your Last Name" />
                        </div>
                        <input type="email" id="" placeholder="Your email" />
                        <textarea name="Message" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    </form>
                        <a href="#!" className="btn btn-01 btn-contact">Enviar <i className="uil uil-message uil-message-contact"></i></a>
                </div>
    );
}

export default FormContact;