import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Game } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
      </Switch>
    </div>
  );
}

export default App;
