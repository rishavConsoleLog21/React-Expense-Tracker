import React,{ useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

function Expense(props) {
  
  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }
  
  return (
    <div>
    <Card className="expenses">
        <ExpensesFilter onSelected={filteredYear} onFilter={filterChangeHandler}/>
        <ExpenseItem
        title={props.items[0].title}
        spend={props.items[0].spend}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        spend={props.items[1].spend}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        spend={props.items[2].spend}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        spend={props.items[3].spend}
        date={props.items[3].date}
      />
    </Card>
    </div>
  )
}

export default Expense;