import Expenses from "./components/Expenses";

const expenses = [
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
  return (
  <Expenses expenses={expenses}/>
  );
}

export default App;

