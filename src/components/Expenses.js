import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';


export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020')

  const filteredExpenses = props.items.filter(item => 
    item.date.getFullYear() === Number(filteredYear)
  );

  function filterChangehandler(selectedYear) {
    setFilteredYear(selectedYear);
  }

    return (
      <div>
    <Card className='expenses'>
      <ExpensesFilter 
      selected={filteredYear} 
      onChangeFilter={filterChangehandler}
      />
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </div>
    )
}