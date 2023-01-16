import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Game, Feedback, Ranking } from './pages';
import './index.scss';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/game" component={ Game } />
        <Route path="/feedback" component={ Feedback } />
        <Route path="/ranking" component={ Ranking } />
      </Switch>
    </div>
  );
}

export default App;
