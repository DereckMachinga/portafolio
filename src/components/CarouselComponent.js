import React, {Fragment} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Imagen1 from '../img/about.jpg';

export default function CarouselComponent() {
        const clickItem = () => {
            console.log('click en la imagen');
        }
    return (
        <Fragment>
            <div className="portfolio" id="portfolio">
                <h2 className="title">Portfolio</h2>
                <h3 className="subtitle">My project's</h3>
            </div>
            <div className="carousel-wrapper">
                <Carousel autoPlay infiniteLoop showArrows={true} onClickItem={clickItem} centerMode={true} dynamicHeight={true}>
                    <div>
                        <img className="img-carousel" src={Imagen1}/>
                        
                    </div>
                    <div>
                        <img className="img-carousel" src={Imagen1} />
                        
                    </div>
                    <div>
                        <img className="img-carousel" src={Imagen1} />
                    </div>
                </Carousel>
            </div>
        </Fragment>
    );
}