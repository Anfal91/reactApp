import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Admin from './components/Admin';
import Contact from './components/Contact'
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
   
    <Router>
    <Header/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/about">
      <AboutUs/>
    </Route>

    <Route path="/contact">
      <Contact/>
    </Route>

    <Route path="/faq">
      <Faq/>
    </Route>

    <Route path="/admin">
      <Admin/>
    </Route>
    </Switch>
    <Footer/>
    </Router>
  
    
  );
}

export default App;
