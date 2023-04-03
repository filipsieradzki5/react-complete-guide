import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm() {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    function titleChangeHandler(e) {
        setEnteredTitle(e.target.value);
    };
    function amountChangeHandler(e) {
        setEnteredAmount(e.target.value);
    };
    function dateChangeHandler(e) {
        setEnteredDate(e.target.value);
    };

    function submitHandler(e) {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };    
        console.log(expenseData);
    };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__control'>
            <div className='new expense controls'>
                <label>{enteredTitle}</label>
                <input type='text' onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' />
            </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2025-01-01'/>
                </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};