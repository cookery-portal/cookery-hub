import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Layout from './hocs/Layout';
import Home from './containers/Home';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Activate from './containers/Activate';
import Reset from './containers/Reset';
import Resetconfirm from './containers/Resetconfirm';
import Firstpage from './containers/Firstpage';
import Footer from './components/Footer';
import '../src/containers/Home.css'

import { Provider } from 'react-redux';
import store from './store';

const App=() =>(
  <div className="App_root">
  <Provider store={store}>
    <Router>
        <Layout>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/reset' component={Reset} /> 
              <Route exact path='/firstpage' component={Firstpage} />
              <Route exact path='/password/reset/confirm/:uid/:token' component={Resetconfirm} />
              <Route exact path='/activate/:uid/:token' component={Activate} />
          </Switch>
        </Layout>
    </Router>
    <Footer />
  </Provider>
  </div>
);

export default App


