import { useEffect, useState } from "react"
export function TipTotal (props){
    const [amount, setAmount] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        if(props.bill > 0 && props.tip > 0 && props.people > 0){
            setAmount(props.bill * props.tip / 100 / props.people)
            setTotal(amount + props.bill / props.people )
        }  
    })
    return(
        <>
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

            <button type="button" className='btn-reset' >
                reset 
            </button>
        </>
        
    )
}