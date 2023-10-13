
import { useState } from 'react'
//import useLocalStorage from '../../hooks/useLocalStorage'
import Button from '../Button/Button'
import Display from '../Display/Display'


/*const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    setTotal(updatedLeft + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    console.log('left before', left)
    setRight(right + 1)
    console.log('left after', left)
    setTotal(left + right) //or  setTotal(left + right) 
  }



  return (
    <div>
    {left}
    <button onClick={handleLeftClick}>left</button>
    <button onClick={handleRightClick}>right</button>
    {right}
    <History allClicks={allClicks} />
  </div>
  )
}*/

//Régle des crochets sur https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps
//Programmeurs de programmes Web serment à voir c'est interessant !
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />      
      <Button handleClick={() => setToValue(0)} text="reset" />      
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}
export default App;