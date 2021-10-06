import React from 'react'
import { Check, Add, Remove } from '@material-ui/icons'

const AmountButton = ({increase, decrease, amount}) => {
    return (
        <div>
             <div className="amount-container">
             <span onClick={decrease}><Remove className="icon"/></span>
             <span>{amount}</span>
             <span onClick={increase}><Add className="icon"/></span>
            </div>           
        </div>
    )
}

export default AmountButton
