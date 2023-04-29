import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext } from 'react'
import CartItem from './CartItem'

export default function Cart(props) {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.addItem({ ...item, amount: 1 });
    }


    const cartItems = (
    <ul className={classes['cart-items']}>
    {cartCtx.items.map(item => (<CartItem 
    key={item.id}
    name={item.name}
    amount={item.amount}
    price={item.price}
    onRemove={cartItemRemoveHandler.bind(null, item.id)}
    onAdd={cartItemAddHandler.bind(null, item)}
    />)
    )}
    </ul>)

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>
                    Close
                </button>
                {hasItems && <button className={classes.button}>
                    Order
                </button>
                 }
            </div>
        </Modal>
    )
}