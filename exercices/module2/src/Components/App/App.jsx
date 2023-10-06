//import React from 'react';
import { useState } from 'react'
import Display from '../Display/Display'
import Button from '../Button/Button'


const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)


  const changeCount = (delta) => {
   
    console.log('changeCount, value before', counter)
    setCounter(counter + delta)

  }
  
  return (
    <div>
    <Display counter={counter} />
    <Button changeCount={changeCount} text="Incrémenter : +1" delta={1} />
    <Button changeCount={changeCount} text="Décrémenter : -1" delta={-1} />
    <Button changeCount={changeCount} text={`Reset : -${counter}`} delta={-counter} />
  </div>
  )
} 
export default App