import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Add, Remove } from '@material-ui/icons'
import { useCartContext } from '../../context/CartContext'
import './addtocart.css'
import AmountButton from '../amountbutton/AmountButton'

function AddToCart({product}) {
    const { addToCart } = useCartContext()
    const { id, stock, colors } = product

    const [mainColor, setMainColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    
    const increase = () => {
        setAmount( (oldAmount) => {
            let tempAmount = oldAmount + 1;
            if( tempAmount > stock){
                tempAmount = stock
            }
            return tempAmount
        })
    }

    const decrease = () => {
        setAmount( (oldAmount) => {
            let tempAmount = oldAmount -1;
            if(tempAmount < 1){
                tempAmount = 1
            }
            return tempAmount

        })
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
            <AmountButton increase={increase} decrease={decrease} amount={amount} />
            <Link to="/cart">
            <button className="btn add-btn" onClick={ () => addToCart(id, mainColor, amount, product)}>Add to Cart</button>
            </Link>
        </div>
    )
}

export default AddToCart
