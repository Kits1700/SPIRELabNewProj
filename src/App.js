import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Part from './components/pages/Part';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import About1 from './components/pages/About1';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/people' component={Services} />
          <Route path='/data' component={Products} />
          <Route path='/about' component={SignUp} />
          <Route path='/partners' component={Part} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
