import React, {Fragment} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Imagen1 from '../img/BienesRaices.png';
import Perfil from '../img/about.jpg';
import Cotizador from '../img/cotizador.jpg'
import Window from '../img/5b4c2694099f923456db7d00164b560dde2d8515.png'
export default function CarouselComponent() {

        const ImagenesArray = [
            {source: Imagen1},
            {source: Perfil},
            {source: Cotizador},
            {source: Window},
        ]

        const clickItem = () => {
            alert('click en la imagen');
        }
    return (
        <Fragment>
            <div className="portfolio" id="portfolio">
                <h2 className="title">Portfolio</h2>
                <h3 className="subtitle">My project's</h3>
            </div>
            <div className="carousel-wrapper">
                <Carousel autoPlay infiniteLoop  onClickItem={clickItem} centerMode={true}>
                    {/**showArrows={true}*/}
                    {ImagenesArray.map(ImagenesItem =>(
                        <div>
                            <img src={ImagenesItem.source} className="img-carousel img-source"/>
                        </div>
                    ))}
                    
                    {/* <div>
                        <img className="img-carousel" src={Imagen1}/>
                        
                    </div>
                    <div>
                        <img className="img-carousel" src={Imagen1} />
                        
                    </div> */}
                </Carousel>
            </div>
        </Fragment>
    );
}