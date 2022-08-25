import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from'../Home';
import Contact from '../Contact';
import Portfolio from '../Portfolio';
import Knowledge from '../Knowledge';
import NotFound from '../NotFound';


const App = () => {
  return (
    <BrowserRouter>
    <switch> 
    <Route path='/'exact component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/knowledge' component={Knowledge} />
    <Route path='/404' component={NotFound} />
    </switch>
    </BrowserRouter>
  );
};

export default App; 