import React, { useState } from 'react';

type Props = {
}

const Counter = React.memo((props: Props) => {
  const [counter, setCounter] = useState(0)
  const increase = () => setCounter(counter + 1)
  const decrease = () => setCounter(counter - 1)


  return (
    <div>
      <h3>Counter (useState)</h3>
      <div>
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
})

export default Counter;
