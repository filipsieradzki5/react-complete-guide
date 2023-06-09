import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import { useRef, useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {

    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState()


    function addUserHandler(e) {
        e.preventDefault();
        const enteredName = nameInputRef.current.value
        const enteredAge = ageInputRef.current.value
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
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

        props.onAddUser(enteredName, enteredAge);
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    };

    function errorHandler() {
        setError(null)
    }

    return (
    <>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type='text' id='username' ref={nameInputRef}/>
                <label htmlFor="age">Age (Years) </label>
                <input type='number' id='age' ref={ageInputRef}/>
                <Button type="submit"> Add User</Button>
            </form>
        </Card>
    </>
    )
}