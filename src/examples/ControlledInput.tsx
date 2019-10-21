import React, { useState } from 'react';

type Props = {
}

const ControlledInput = React.memo((props: Props) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  return (
    <div>
      <h3>Controlled Input</h3>
      <div>
        <p>
          Value: {inputValue}
        </p>
        <input onChange={handleInputChange} type='text' value={inputValue} />
      </div>
    </div>
  );
})

export default ControlledInput;
