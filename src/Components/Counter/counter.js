import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0)
  const handleIncreament = () => {
    setCount(count+1)
  }
  const handleDecreament = () => {
    setCount(count-1)
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncreament}>Increase + </button>
      <button onClick={handleDecreament}>Decrease -</button>
    </div>
  )
}

export default Counter