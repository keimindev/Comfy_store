import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Add, Remove } from '@material-ui/icons'
import './addtocart.css'

function AddToCart({product}) {
    const { id, stock, colors } = product

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    
    const increase = () => {
        setAmount( amount + 1)

    }

    const decrease = () => {
        if(amount > 1){
            setAmount( amount-1)
        }else{
            setAmount(amount)
        }
    }


    return (
        <div className="addToCart-container">
            <p className="colors">
                <span>Colors : </span>
                <p>{colors.map( (color, index) => {
                    return(
                        <button key={index} 
                        className={`${mainColor === color ? 'color-btn btn-active' : 'color-btn'}`}
                        style={{background: color}}
                        onClick={() => setMainColor(color)}>
                            {mainColor === color ? <Check className="icon"/> : null}
                        </button>
                    )
                })}
                </p> 
            </p>
            <div className="amount-container">
                <span onClick={() => increase()}><Add className="icon"/></span>
                <span>{amount}</span>
                <span onClick={() => decrease()}><Remove className="icon"/></span>
            </div>
            <button className="btn add-btn">Add to Cart</button>
        </div>
    )
}

export default AddToCart
