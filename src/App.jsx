import { useState, useEffect,useRef } from 'react'

import Logo from './assets/logo.svg'

function App() {
  const [bill, setBill] = useState(0)
  const [tip, setTip] = useState(0)
  const [people, setPeople] = useState(0)
  const[amount, setAmount] = useState(0)
  const[total, setTotal] = useState(0)

  const billInput = useRef(0)
  const peopleInput = useRef(0)
  const tip5 = useRef(0)
  const tip10 = useRef(0)
  const tip15 = useRef(0)
  const tip25 = useRef(0)
  const tip50 = useRef(0)
  const tipCustom = useRef(0)
  
  useEffect(() => {
    
    if(bill > 0 && tip > 0 && people > 0){
        setAmount(bill * tip / 100 / people)
        setTotal(amount + bill / people )
      }  
    })

  const getTip = (ref) => {
    setTip(ref.current.value.replace(/[^0-9]/g,""))
  }

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
        <label htmlFor='bill'>Bill</label>
        <input type="text" className="bill-input" name='bill' onChange={ () => setBill(billInput.current.value)} ref={billInput}/>

        <label htmlFor='tip'>Select Tip</label>
        <input type="button" className="tip-input" onClick={() => getTip(tip5)} name='tip' value='5%' ref={tip5}/>
        <input type="button" className="tip-input" onClick={() => getTip(tip10)} name='tip' value='10%' ref={tip10}/>
        <input type="button" className="tip-input" onClick={() => getTip(tip15)} name='tip' value='15%' ref={tip15}/>
        <input type="button" className="tip-input" onClick={() => getTip(tip25)} name='tip' value='25%' ref={tip25}/>
        <input type="button" className="tip-input" onClick={() => getTip(tip50)} name='tip' value='50%' ref={tip50}/>
        <input type="text" className="bill-input" name='bill' placeholder='Custom' onChange={()=>getTip(tipCustom)}ref={tipCustom} />

        <label htmlFor='people'>Number of people</label>
        <input type="number" className="people-input" name='people' onChange={ () => setPeople(peopleInput.current.value)} ref={peopleInput} />
      <section>
        <div className='tip-amount-container'>
          <div>
            <p>Tip Amount</p>
            <span>/ person</span>
          </div>

          <span>${amount}</span>
        </div>
        <div className='tip-total-container'><div>
            <p>Total</p>
            <span>/ person</span>
          </div>
          <span>${total}</span>
        </div>
        <button type="button" className='reset-button' onClick={resetAll}>
        reset 
        </button>

      </section>
      </main>
    </>
  )
}

export default App
