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
import ControlledInput from './examples/ControlledInput'
import GithubRepoList from './examples/GithubRepoList'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
          <Link to='/counter'>Counter</Link>
          </li>
          <li><Link to='/counter-reducer'>Counter (useReducer)</Link></li>
          <li><Link to='/controlled-input'>Controlled input</Link></li>
          <li><Link to='/github-repos'>Gith repositories by user</Link></li>
        </ul>
        <Switch>
          <Route path='/counter' component={Counter} />
          <Route path='/counter-reducer' component={CounterUseReducer} />
          <Route path='/controlled-input' component={ControlledInput} />
          <Route path='/github-repos' component={GithubRepoList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
