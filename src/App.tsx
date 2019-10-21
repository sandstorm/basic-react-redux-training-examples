import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Counter from './examples/Counter'
import CounterUseReducer from './examples/CounterReducer'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to='/counter'>Counter</Link>
          </li>
          <li><Link to='/counter-reducer'>Counter (useReducer)</Link></li>
        </ul>
        <Switch>
          <Route path='/counter' component={Counter} />
          <Route path='/counter-reducer' component={CounterUseReducer} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
