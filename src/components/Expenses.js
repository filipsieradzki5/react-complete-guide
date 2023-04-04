import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import { useState } from 'react';


export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  function filterChangehandler(selectedYear) {
    setFilteredYear(selectedYear);
    console.log(filteredYear);
  }

    return (
      <div>
    <Card className='expenses'>
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangehandler}
      />
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
    </div>
    )
}