import React, {Fragment} from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import About from './components/About';
import Skills from './components/Skill/Skills';
function App() {
  return (
    <Fragment>
        <Header/>
        <Presentation/>
        <About/>
        <Skills/>
    </Fragment>
  );
}

export default App;
