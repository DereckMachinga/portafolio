import React from 'react';
import Perfil from '../img/perfil.png';
const Presentation = () => {
    return ( 
        <section className="section" id="presentation">
            <div className="container">
                <div className="presentation-links">
                    <a href="https://www.facebook.com/te.odio.ooooooooo" target="_blank" rel="noreferrer"className="facebook"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="https://wa.link/0rtp5h" target="_blank" rel="noreferrer" className="whatsapp"><ion-icon name="logo-whatsapp"></ion-icon></a>
                    <a href="https://github.com/DereckMachinga" target="_blank" rel="noreferrer" className="github"><ion-icon name="logo-github"></ion-icon></a>
                </div>
                <div className="presentation-img">
                    <svg className="presentation-blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                            <image className="presentation-blob-img" href={Perfil} x='0' y='-64'/>
                        </g>
                    </svg>
                </div>
                <div className="presentation-info">
                    <h2 className="title">Hi, I'm Dereck</h2>
                    <h3 className="subtitle">Full Stack Developer</h3>
                    <p className="presentation-p">High level experience in web design and back-end development</p>
                    <a href="https://wa.link/0rtp5h" target="_blank" rel="noreferrer"  className="btn btn-01 font-1">Contact me  <i className="uil uil-message uil-message-contact"></i></a>
                </div>

            </div>
        </section>
    );
}

export default Presentation;