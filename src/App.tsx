import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Counter from './examples/Counter'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to='/counter'>Counter</Link>
          </li>
        </ul>
        <Switch>
          <Route path='/counter' component={Counter} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
