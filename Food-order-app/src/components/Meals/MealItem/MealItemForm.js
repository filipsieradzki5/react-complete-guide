import { useRef, useState } from 'react';
import Input from '../../UI/Input'
import classes from './MealitemForm.module.css'

export default function MealItemForm(props) {

    const [amountIsValid, setAmountIsValid] = useState(true)

    const amountInputRef = useRef();

    function submitHandler(e) {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
        setAmountIsValid(false)
    } 

    props.onAddToCart(enteredAmountNumber)
}

    return (
        <form className={classes.form}>
            <Input label='Amount' input={{
                ref: {amountInputRef},
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please provide a valid amount </p>}
        </form>
    )
}