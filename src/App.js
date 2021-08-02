import React, {Fragment} from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Skills from './components/Skill/Skills';
import Contact from './components/Contact';
import PortfolioState from './context/portfolioState';
function App() {
  return (
    <PortfolioState>
      <Fragment>
          <Header/>
          <Presentation/>
          <About/>
          <Skills/>
          <Contact/>
      </Fragment>
    </PortfolioState>
  );
}

export default App;
