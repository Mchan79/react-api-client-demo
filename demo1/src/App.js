import React from 'react';
import { Route, Router } from 'react-router-dom';
import history from './history'
import Grid from './components/grid'

function App() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Grid}/>
    </Router>
  );
}

export default App;
