import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2023");

  // let filterInfoText = "2024 and 2025";
  // if(filteredYear === '2023') {
  //   filterInfoText = "2024 and 2025";
  // } else if(filteredYear === '2024') {
  //   filterInfoText = "2023 and 2025";
  // } else if(filteredYear === '2025') {
  //   filterInfoText = "2023 and 2024";
  // } else {
  //   filterInfoText = "2023, 2024 and 2025";
  // }
  
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelected={filteredYear}
          onFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
