import React from 'react'
import useSticky from './hooks/useSticky.js'
import Welcome from './components/Header/Welcome'
import Navbar from './components/Header/Navbar'

function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Welcome element={element} />
        </>
    )
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