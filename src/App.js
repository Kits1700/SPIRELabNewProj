import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Team';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Part from './components/pages/Part';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import About1 from './components/pages/About1';
import Media from './components/pages/Media';
import Map from './components/pages/Map';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/team' component={Services} />
          <Route path='/data' component={Products} />
          <Route path='/methodology' component={SignUp} />
          <Route path='/media' component={Media}/>
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
