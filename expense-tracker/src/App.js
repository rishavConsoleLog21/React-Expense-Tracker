import "./App.css";
import React,{useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpens from "./components/NewExpense/NewExpens";

const Dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    spend: 94.12,
    date: new Date(2023, 7, 14),
  },
  { 
    id: "e2", 
    title: "New TV", 
    spend: 799.49, 
    date: new Date(2023, 0, 12) 
  },
  { 
    id: "e3",
    title: "Car Insurance",
    spend: 294.67,
    date: new Date(2023, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    spend: 450,
    date: new Date(2023, 5, 12),
  },
];

function App() {
  const [expenses,setExpenses] = useState(Dummy);

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses];
    });
  }

  return (
    <div className="App">
      <NewExpens onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
