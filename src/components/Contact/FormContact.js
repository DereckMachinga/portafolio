import React,{useState} from 'react';
import emailjs from 'emailjs-com';
import { withRouter } from 'react-router';
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
        if(nombre === '' || apellido === '' || email === '') {
            return alert("Todo los campos son obligatorio")
        }else{
            // emailjs.sendForm('service_g36ry7h','template_ifvvnqm',e.target,'user_ryVSOFK8p0n18EeDwrUth').then((result)=>{
            //     console.log(result.text);
            //     // withRouter.browserHistory.push('/SendMail');
            //     return (<Redirect to='/SendMail'/>);
            // },(error) => {
            //     console.log(error.text);
            // });
            // e.target.reset();
            console.log(nombre);
        }
        
    }

    return ( 
            <div className="form-contact">
                    <form action="post" 
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
                        <input type="submit" value="Send" className="btn btn-01 btn-contact" />
                    </form>
                        {/* <a href="#!" className="btn btn-01 btn-contact">Enviar <i className="uil uil-message uil-message-contact"></i></a> */}
                </div>
    );
}

export default withRouter(FormContact);