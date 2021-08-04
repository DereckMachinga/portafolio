import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PortfolioState from './context/portfolioState';
import Page from './components/Page';

function App() {
  return (
    <PortfolioState>
      <Page></Page>
      {/* {mode === 'light' ? <h2>Tema claro</h2> : <h2>Tema oscuro</h2>} */}
            {/* <Header/>
            <Presentation/>
            <About/>
            <Skills/>
            <Contact/> */}
    {
      window.scroll({
        top: 2500, 
        left: 0, 
        behavior: 'smooth'
      })
    }
    <Router>
        <Switch>
            <Route path="./" component={Page}/>
        </Switch>
    </Router> 
    </PortfolioState>
  );
}

export default App;
