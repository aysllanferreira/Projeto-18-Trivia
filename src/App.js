import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Game, Settings, Feedback } from './pages';
// import Feedback from './pages/Feedback';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/settings" component={ Settings } />
        <Route path="/feedback" component={ Feedback } />
      </Switch>
    </div>
  );
}

export default App;
