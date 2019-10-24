import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

import Counter from 'examples/Counter'
import CounterUseReducer from 'examples/CounterReducer'
import ControlledInput from 'examples/ControlledInput'
import GithubRepoList from 'examples/GithubRepoList'

import ControlledInputRedux from 'examples/Redux/ControlledInput'
import ConsumingDiv from 'examples/Redux/ControlledInput/ConsumingDiv'

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <h1>Examples</h1>
        <ul style={{ textAlign: 'left' }}>
          <h2>React</h2>
          <li>
          <Link to='/counter'>Counter</Link>
          </li>
          <li><Link to='/counter-reducer'>Counter (useReducer)</Link></li>
          <li><Link to='/controlled-input'>Controlled input</Link></li>
          <li><Link to='/github-repos'>Github repositories by user</Link></li>
          <h2>React with Redux</h2>
          <li><Link to='/controlled-input-redux'>Controlled input</Link></li>
          <li><Link to='/github-repos-redux'>Github repositories by user</Link></li>
        </ul>
        <div style={{ border: '1px solid #999', width: '400px', margin: '20px auto', padding: '20px' }}>
          <Switch>
            <Route path='/counter' component={Counter} />
            <Route path='/counter-reducer' component={CounterUseReducer} />
            <Route path='/controlled-input' component={ControlledInput} />
            <Route path='/github-repos' component={GithubRepoList} />
            <Route path='/controlled-input-redux' component={ControlledInputRedux} />
          </Switch>
        </div>
        <Route path='/controlled-input-redux' component={ConsumingDiv} />
      </div>
    </Router>
  );
}

export default App;
