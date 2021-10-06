import React from 'react'
import { useCartContext } from "../../context/CartContext"
import { formatPrice } from "../../utils"
import AmountButton from '../amountbutton/AmountButton'
import { Delete } from '@material-ui/icons'
import "./cartitem.css"

const CartItem = ({id, image, name, color, price, amount}) => {
    const {removeItem, toggleAmount } = useCartContext()

    const increase = () => {
        toggleAmount(id, 'inc')

    }
    const decrease = () => {
        toggleAmount(id, 'dec')
    }

    return (
        <div className="cart-item-container">
           <div className="title">
               <img src={image} alt={name}/>
               <div>
                   <h5 className='name'>{name}</h5>
                   <p className="color">
                       color : <span style={{background: color }}></span>
                   </p>
                   <h5 className="price-small">{formatPrice(price)}</h5>
               </div>
           </div>
           <h5 className="price">{formatPrice(price)}</h5>
           <AmountButton increase={increase} decrease={decrease} amount={amount} />
           <h5 className='subtotal'>
               {formatPrice(price * amount)}
           </h5>
           <button type="button" className="remove-cart-item-btn btn" onClick={() => removeItem(id)}><Delete className="icon" /></button>
           
        </div>
    )
}

export default CartItem
