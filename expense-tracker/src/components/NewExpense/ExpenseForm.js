import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [addTitle, setAddTitle] = useState(""); // useState is a react hook
  const [addSpend, setAddSpend] = useState(""); // useState is a react hook
  const [addDate, setAddDate] = useState(""); // useState is a react hook
  //another way to use useState
  // const [userInput, setUserInput] =useState({
  //   addTitle: '',
  //   addSpend: '',
  //   addDate: ''
  // });

  const titleChangeHandler = (event) => {
    setAddTitle(event.target.value);

    //another way to use useState
    // setUserInput({
    //   ...userInput,
    //   addtitle: event.target.value
    // })

    //another way to use useState
    // setUserInput((prevState)=>{
    //   return {...prevState, addtitle: event.target.value}
    // })
  };

  const spendChangeHandler = (event) => {
    setAddSpend(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setAddDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //to prevent page reload
    const expenseData = {
      title: addTitle,
      spend: addSpend,
      date: new Date(addDate),
    };
    console.log(expenseData);
    setAddTitle("");
    setAddSpend("");
    setAddDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" value={addTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Spend</label>
          <input
            type="number"
            value={addSpend}
            min="1"
            step="1"
            onChange={spendChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            value={addDate}
            min="2023-01-01"
            max="2026-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
