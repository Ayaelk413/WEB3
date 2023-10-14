
import { useState } from 'react'
//import useLocalStorage from '../../hooks/useLocalStorage'
import Button from '../Button/Button'
import Display from '../Display/Display'


const Stat = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
     {props.allClicks.join(' ')}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [totalGood, setTotalGood] = useState(0)
  const [totalNeutral, setTotalNeutral] = useState(0)
  const [totalBad, setTotalBad] = useState(0)

  const goodClick = () => {
    const updateGood = good + 1
    setGood(updateGood)
    setTotalGood(updateGood + good)
  }

  const neutralClick = () => {
    const updateNeutral = neutral + 1
    setNeutral(updateNeutral)
    setTotalNeutral(updateNeutral+neutral)  
  }

  const badClick = () => {
    const updateBad = bad + 1
    setBad(updateBad)
    setTotalBad(updateBad + bad)  
  }



  return (
    <div>
    
    <p><h1>Give feedback</h1></p>
    <button onClick={goodClick}>good </button>
    <button onClick={neutralClick}>neutral </button>
    <button onClick={badClick}>bad </button>

    <p><h1>Statistique</h1></p>
     <p>good  {good}</p>
     <p>neutral  {neutral}</p>
     <p>bad  {bad}</p>
  </div>
  )
}

export default App;