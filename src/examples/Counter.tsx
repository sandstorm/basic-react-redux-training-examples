import React, { useState } from 'react';
import { Route } from 'react-router'

type Props = {
}

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)


  return (
    <div>
      <h3>Counter (useState)</h3>
      <div>
        <Route path="/counter/something" component={() => (<h1>'someti'</h1>)} />
        <p>
          Value: {counter}
        </p>
        <button onClick={increase}>
          Add 1
        </button>
        <button onClick={decrease}>
          Remove 1
        </button>
      </div>
    </div>
  );
}

export default React.memo(Counter);
