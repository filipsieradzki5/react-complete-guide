import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState
 } from "react";
const DUMMY_EXPENSES = [
  {
    title:'Car Insurance',
    amount:294.67,
    date:new Date(2022, 2, 15),
  },
  {
    title:'elo',
    amount:29224.67,
    date:new Date(2022, 2, 15),
  },
  {
    title:'hi',
    amount:29114.67,
    date:new Date(2022, 2, 15),
  }
]

function App() {

const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

function addExpenseHandler(expense) {
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses]
  })
};

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;

