import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';


export default function Expenses(props) {
    return (
    <Card className='expenses'>
      <h2>Let's get started!</h2>
      <ExpenseItem 
        name={props.expenses[0].title} 
        amount={props.expenses[0].amount} 
        date={props.expenses[0].date}>
      </ExpenseItem>
      <ExpenseItem 
        name={props.expenses[1].title} 
        amount={props.expenses[1].amount} 
        date={props.expenses[1].date}>
      </ExpenseItem>
      <ExpenseItem 
        name={props.expenses[2].title} 
        amount={props.expenses[2].amount} 
        date={props.expenses[2].date}>
      </ExpenseItem>
    </Card>
    )
}