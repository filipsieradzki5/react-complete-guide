import Modal from '../UI/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import { useContext, useState } from 'react'
import CartItem from './CartItem'
import Checkout from './Checkout'

export default function Cart(props) {

    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.addItem({ ...item, amount: 1 });
    }

    function orderHandler() {
        setIsCheckout(true)
    }

    async function submitOrderHandler(userData) {
        setIsSubmitting(true)
        await fetch('https://foor-order-app-cb6b9-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user:userData,
                orderedItems: cartCtx.items
            })
        })
        setIsSubmitting(false)
        setDidSubmit(true)
        cartCtx.clearCart()
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

        const modalActions = (
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes['button--alt']}>
                    Close
                </button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>
                    Order
                </button>
                 }
            </div>
        )

        const cartModalContnent = 
        <>
            {cartItems}
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckout &&<Checkout onSubmit={submitOrderHandler}onCancel={props.onClose}/>}
            {!isCheckout && modalActions}
            </>

        const isSubmittingModal = <p> Sending order data...</p>
        
        const didSubmitModal = <>
        <p> Successfuly sent the order</p>
        <div className={classes.actions}>
        <button onClick={props.onClose} className={classes.button}>
                    Close
        </button>
        </div>
        </>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContnent}
            {isSubmitting && isSubmittingModal}
            {!isSubmitting && didSubmit && didSubmitModal}
        </Modal>
    )
}