import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import TokenView from './components/TokenView'
import Heading from './components/Heading'
import { Main } from '@aragon/ui'
import './App.css';

function App() {
  return (
    <Main>
      <Router>
        <Heading/>
        <Switch>
          <Route path='/token/:addr' children={<TokenView/>}/>
          <Route path='/' children={<Dashboard/>}/>
        </Switch>
      </Router>
    </Main>
  );
}

export default App;

