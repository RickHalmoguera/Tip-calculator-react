import { useState, useEffect } from 'react'
import {Data} from './components/Data'
import {TipTotal } from './components/TipTotal'
import Logo from './assets/logo.svg'
import './App.css'

function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  
  
  const resetAll = () => {
    setBill(0)
    setTip(0)
    setPeople(0)
    setAmount(0)
    setTotal(0)
    billInput.current.value = ''
    peopleInput.current.value = ''
  }
  
  return (
    <>
      <header>
        <img src={Logo} className="App-logo" alt="logo" />
      </header>
      <main>
      <section className='info-container'>
        <Data 
        getBill={ (value)=>setBill(value)}
        getTip={ (ref)=>setTip(ref.current.value.replace(/[^0-9]/g,""))}
        getPeople={ (value)=>setPeople(value)}
        />  
      </section>  
      <section className='result-container'>
        <TipTotal 
          bill={bill}
          tip={tip}
          people ={ people }
        />

      </section>
      </main>
    </>
  )
}

export default App
