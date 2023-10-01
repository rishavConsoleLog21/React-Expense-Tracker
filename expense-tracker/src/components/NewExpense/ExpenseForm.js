import React from 'react'
import './ExpenseForm.css'

function ExpenseForm() {
  return (
    <form action="">
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label htmlFor="">Title</label>
                <input type="text"/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Spend</label>
                <input type="number" min="1" step="1"/>
            </div>
            <div className='new-expense__control'>
                <label htmlFor="">Date</label>
                <input type="date" min="2023-01-01" max="2026-01-01"/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
}

export default ExpenseForm