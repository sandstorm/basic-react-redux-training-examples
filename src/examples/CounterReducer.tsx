import React, { useReducer } from 'react';

type Props = {
}

type ActionType = 'INCREMENT' | 'DECREMENT'

type Action = { type: ActionType }
type State = number

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'INCREMENT': {
      return state + 1
    }

    case 'DECREMENT': {
      return state - 1
    }

    default: {
      return state
    }
  }
}

const CounterUseReducer = (props: Props) => {
  const [counter, dispatch] = useReducer(reducer, 0)

  return (
    <div>
      <h3>Counter (useReducer)</h3>
      <div>
        <p>
          Value: {counter}
        </p>
        <button onClick={() => dispatch({type: 'INCREMENT'})}>
          Add 1
        </button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}>
          Remove 1
        </button>
      </div>
    </div>
  );
}

export default React.memo(CounterUseReducer);
