import React, {Fragment} from 'react';
import Header from './Header';
import Presentation from './Presentation';
import About from './About';
import Skills from './Skill/Skills';
import Contact from './Contact/Contact';
import Portfolio from './CarouselComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Page = () => {
    return (  
        <Fragment>
            <Header/>
            <main>
                <Presentation/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </main>
        </Fragment>
    );
}

export default Page;

