import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";

import useSticky from './hooks/useSticky.js'
import Welcome from './components/Header/Welcome'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/footer'
import About from './components/Header/About'
// import ParentCard from './components/ParentCard'

function App() {
    const { isSticky, element } = useSticky()
    return (
        <div classname='Container fluid'>
          <React.Fragment>
          <row>
               <Navbar sticky={isSticky} /> 
            </row>
            <row>
               <Welcome element={element} />
          </row>
          </React.Fragment>
          <React.Fragment>
            <row>
                <About />
            </row>
            <row>
                <About />
            </row>
            <row>
                <About />
            </row>
            <row>
                <About />
            </row>
            <row>
                <Footer />
            </row>
          </React.Fragment>
      </div>    
        
    );
}

export default App





/*import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { NoMatch } from './components/NoMatch';
//import Footer from './components/footer'

function App() {
  return (
    <React.Fragment>
  <Router>
    <NavigationBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route component={NoMatch} />
    </Switch>
    
  </Router>
</React.Fragment>
  );
}

export default App;*/