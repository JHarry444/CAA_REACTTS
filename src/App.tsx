import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Trainer from './components/Trainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Trainer name='Jordan' age={31} specialty='Java'/>
      <Trainer age={12} name='Derek'/>
    </>
  )
}

export default App
