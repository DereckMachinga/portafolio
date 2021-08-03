import React, {Fragment, useContext} from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Skills from './components/Skill/Skills';
import Contact from './components/Contact/Contact';
import PortfolioState from './context/portfolioState';


function App() {
  return (
    <PortfolioState>
      {/* {mode === 'light' ? <h2>Tema claro</h2> : <h2>Tema oscuro</h2>} */}
            <Header/>
            <Presentation/>
            <About/>
            <Skills/>
            <Contact/>
    </PortfolioState>
  );
}

export default App;
