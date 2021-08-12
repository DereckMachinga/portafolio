import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import { withRouter } from 'react-router';
import Popup from 'reactjs-popup';
import EnvioCorreo from '../../img/undraw_Mail_sent_re_0ofv.svg';
const FormContact = () => {
    const [correo, guardarCorreo] = useState({
        nombre: '',
        apellido: '',
        email: ''
    })
    const {nombre,apellido,email} = correo;
    const onChangeCorreo = e => {
        guardarCorreo({
            ...correo,
            [e.target.name] : e.target.value,
        })
    }
    
    function sendEmail(e) {
        e.preventDefault();
        if(nombre.length === 0 || apellido.length === 0 || email.length === 0) {
            e.target.reset();
            return alert("Todo los campos son obligatorio")
        }else{
            emailjs.sendForm('service_g36ry7h','template_ifvvnqm',e.target,'user_ryVSOFK8p0n18EeDwrUth').then((result)=>{
                console.log(result.text);
            },(error) => {
                console.log(error.text);
            });
            e.target.reset();
            guardarCorreo({
                nombre:'',
                apellido:'',
                email:'',
            })
            console.log(nombre);
        }
        
    }

    return ( 
            <div className="form-contact">
                    <form action="post" id="form"
                        onSubmit={sendEmail}
                    >
                        <div className="form-two">
                            <input type="text" id="nombre" name="nombre" placeholder="Name" 
                                onChange={onChangeCorreo}
                            />
                            <input type="text" id="apellido" name="apellido" placeholder="Last Name" 
                                onChange={onChangeCorreo}
                            />
                        </div>
                        <input type="email" name="email" placeholder="Your email" 
                            onChange={onChangeCorreo}
                        />
                        <textarea name="Message" name="mensaje" cols="30" rows="10" placeholder="Your Message"></textarea>
                        { nombre.length === 0 || apellido.length === 0 || email.length === 0? 
                            (    
                                <p className="error">Todos los campos son obligatorio</p>       
                            )
                        : 
                            (
                                
                                <Popup 
                                    trigger={
                                        <button className="btn btn-01 btn-contact">Enviar <i className="uil uil-message uil-message-contact"></i></button>
                                    }
                                    modal nested
                                >
                                    {close => (
                                        <div>
                                            <div className="modal">
                                                <button className="close" onClick={close}>
                                                &times;
                                                </button>
                                                <div className="content">
                                                {' '}
                                                    <img src={EnvioCorreo} alt="" />
                                                    <div className="actions">
                                                        <span>El correo a sido enviado con exito</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            )}
                                </Popup>
                                
                            )
                    }
                    </form>
                        {/* <a href="#!" className="btn btn-01 btn-contact">Enviar <i className="uil uil-message uil-message-contact"></i></a> */}
                </div>
    );
}

export default withRouter(FormContact);