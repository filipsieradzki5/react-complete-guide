import { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

export default function HeaderCartButton(props) {
    const [btnIsHiglighted, setbtnIsHiglighted] = useState(false)
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)


    const btnClasses = `${classes.button} ${ btnIsHiglighted ? classes.bump : ''}`

    useEffect(() => {
        if(items.length === 0) {
            return;
        }
        setbtnIsHiglighted(true)

        const timer = setTimeout(() => {setbtnIsHiglighted(false)},300)

        return () => {
            clearTimeout(timer)
        }

    },[items])

   return <button className={btnClasses} onClick={props.onClick}>
    <span className={classes.icon}>
        <CartIcon />
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>
        {numberOfCartItems}
    </span>
   </button>
}