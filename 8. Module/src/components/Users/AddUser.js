import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {

    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState()

    function addUserHandler(e) {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }

        if (+enteredAge < 1 ) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age'
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('')
        setEnteredAge('')
    };

    function usernameChangeHandler(e) {
        setEnteredUsername(e.target.value)
    }

    function ageChangeHandler(e) {
        setEnteredAge(e.target.value)
    }

    function errorHandler() {
        setError(null)
    }

    return (
    <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type='text' id='username' value={enteredUsername} onChange={usernameChangeHandler}/>
                <label htmlFor="age">Age (Years) </label>
                <input type='number' id='age' value={enteredAge} onChange={ageChangeHandler}/>
                <Button type="submit"> Add User</Button>
            </form>
        </Card>
    </>
    )
}