import './ExpenseForm.css';
import { useState } from 'react';

export default function ExpenseForm(props) {

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
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__control'>
            <div className='new expense control'>
                <label>Title</label>
                <input 
                value={enteredTitle}
                type='text' 
                onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input 
                value={enteredAmount}
                type='number' 
                min='0.01' 
                step='0.01' 
                onChange={amountChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input 
                value={enteredDate}
                type='date' 
                min='2019-01-01' 
                max='2025-01-01'
                onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    );
};