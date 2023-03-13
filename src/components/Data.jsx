import { useRef } from "react"

export function Data(props){
    const billInput = useRef(0)
    const peopleInput = useRef(0)
    const tip5 = useRef(0)
    const tip10 = useRef(0)
    const tip15 = useRef(0)
    const tip25 = useRef(0)
    const tip50 = useRef(0)
    const tipCustom = useRef(0)

    return(
        <>
            <label htmlFor='bill'>Bill</label>
            <input type="text" className="bill-input" name='bill' onChange={ () => props.getBill(billInput.current.value)} ref={billInput}/>

            <label htmlFor='tip'>Select Tip</label>
            <input type="button" className="tip-input" onClick={() => props.getTip(tip5)} name='tip' value='5%' ref={tip5}/>
            <input type="button" className="tip-input" onClick={() => props.getTip(tip10)} name='tip' value='10%' ref={tip10}/>
            <input type="button" className="tip-input" onClick={() => props.getTip(tip15)} name='tip' value='15%' ref={tip15}/>
            <input type="button" className="tip-input" onClick={() => props.getTip(tip25)} name='tip' value='25%' ref={tip25}/>
            <input type="button" className="tip-input" onClick={() => props.getTip(tip50)} name='tip' value='50%' ref={tip50}/>
            <input type="text" className="bill-input" name='bill' placeholder='Custom' onChange={()=>getTip(tipCustom)}ref={tipCustom} />

            <label htmlFor='people'>Number of people</label>
            <input type="number" className="people-input" name='people' onChange={ () => props.getPeople(peopleInput.current.value)} ref={peopleInput} />
        </>
    
    )


}