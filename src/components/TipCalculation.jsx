import { useEffect, useState, useRef } from "react"
import DollarSign from '../assets/icon-dollar.svg'
import PeopleSign from '../assets/icon-person.svg'

export function TipCalculation (props){
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)

    const billInput = useRef(0)
    const peopleInput = useRef(0)
    const tip5 = useRef(0)
    const tip10 = useRef(0)
    const tip15 = useRef(0)
    const tip25 = useRef(0)
    const tip50 = useRef(0)
    const tipCustom = useRef(0)

    useEffect(() => {
        if(props.bill > 0 && props.tip > 0 && props.people > 0){
            setAmount(props.bill * props.tip / 100 / props.people)
            setTotal(amount + props.bill / props.people )
        }  
    })

    const ClearInputANdReset = () => {
        billInput.current.value = 0
        peopleInput.current.value = 0
        tipCustom.current.value = ''
        setAmount(0)
        setTotal(0)
        props.handleReset()
    }
    
    return(
        <>
            <section className='info-container'>
                
                <label htmlFor='bill' className="section-heading">Bill</label>
                <br></br>
                <div className="input-container">
                    <img src={DollarSign} alt='dollar sign' />
                    <input type="text" className="input-field" name='bill' onChange={ () => props.getBill(billInput.current.value)} ref={billInput}/>
                </div>
                
                <label htmlFor='tip' className="section-heading">Select Tip</label>
                <br></br>
                <div className='btns-container'>
                    <input type="button" className="btn" onClick={() => props.getTip(tip5)} name='tip' value='5%' ref={tip5}/>
                    <input type="button" className="btn" onClick={() => props.getTip(tip10)} name='tip' value='10%' ref={tip10}/>
                    <input type="button" className="btn" onClick={() => props.getTip(tip15)} name='tip' value='15%' ref={tip15}/>
                    <input type="button" className="btn" onClick={() => props.getTip(tip25)} name='tip' value='25%' ref={tip25}/>
                    <input type="button" className="btn" onClick={() => props.getTip(tip50)} name='tip' value='50%' ref={tip50}/>
                    <input type="text" className="custom-input" name='bill' placeholder='Custom' onChange={()=>getTip(tipCustom)}ref={tipCustom} />
                </div>
                

                <label htmlFor='people' className="section-heading">Number of people</label>
                <br></br>
                <div className="input-container">
                    <input type="number" className="input-field" name='people' onChange={ () => props.getPeople(peopleInput.current.value)} ref={peopleInput} />
                    <img src={PeopleSign} alt='dollar sign' />
                </div>
                
            </section>

            <section className='result-container'>
                <div className='tip-container'>
                    <div>
                        <p>Tip Amount</p>
                        <span className="person-span">/ person</span>
                    </div>

                    <span className="amount">${amount}</span>
                </div>
                
                <div className='total-container'>
                    <div>
                        <p>Total</p>
                        <span className="person-span">/ person</span>
                    </div>
                
                    <span className="amount">${total}</span>
                
                </div>

                <button type="button" className='btn-reset' onClick={ClearInputANdReset} >
                    reset 
                </button>
            </section>
        </>
    )
}