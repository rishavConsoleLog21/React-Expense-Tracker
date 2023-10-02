import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

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

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelected={filteredYear}
          onFilter={filterChangeHandler}
        />
        {/* <p>Date for years {filterInfoText} is hidden.</p> */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expense;
