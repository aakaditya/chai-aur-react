import { useState } from 'react'
import DigitalClock from './DigitalClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Good Morning</h1>
       <DigitalClock/>
    </>
  )
}

export default App
