import React,{ useState } from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpens(props) {
  const [isEditing, setIsEditing] = useState(false)

  const onSaveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
    setIsEditing(false)
  };

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseData} onCancel={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpens