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
            <div className='tip-amount-container'>
                <div>
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>

                <span>${amount}</span>
            </div>
            
            <div className='tip-total-container'>
                <div>
                    <p>Total</p>
                    <span>/ person</span>
                </div>
            
                <span>${total}</span>
            
            </div>

            <button type="button" className='reset-button' >
                reset 
            </button>
        </>
        
    )
}