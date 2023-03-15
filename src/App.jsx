import { useState, useEffect } from 'react'
import {TipCalculation } from './components/TipCalculation'
import Logo from './assets/logo.svg'
import './App.css'

function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  
  const getBill =(value)=>{
    setBill(value)
  }
  const getTip =(ref)=>{
    setTip(ref.current.value.replace(/[^0-9]/g,""))
  }

  const getPeople =(value)=>{
    setPeople(value)
  }

  const resetAll = () => {
    setBill(0)
    setTip(0)
    setPeople(0)
  }
  
  return (
    <>
      <header>
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <>
          <TipCalculation
          getBill={getBill}
          getTip={getTip}
          getPeople={getPeople}
          bill={bill}
          tip={tip}
          people ={ people }
          handleReset={resetAll}
          />  
        </>  
      </main>
    </>
  )
}

export default App
