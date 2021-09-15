import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Contact } from './screens/contact';
import { Home } from './screens/home';

import './styles/screen.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
