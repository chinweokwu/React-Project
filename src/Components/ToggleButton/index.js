/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

const toggleButton = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {
        show ? <h1>Moses is a cockroach</h1> : <h1>Paul is a good person</h1>
      }
      {/* <button onClick={() => setShow(true)}>Show Content</button>
      <button onClick={() => setShow(true)}>Hide Content</button> */}
      <button onClick={() => setShow(!show)}>Toggle Content</button>
    </div>
  )
}

export default toggleButton;