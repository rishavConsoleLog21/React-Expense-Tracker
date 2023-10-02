import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  
  const dropdownChangeHandler = (event) => {
    props.onFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter Year</label>
        <select value={props.onSelected} onChange={dropdownChangeHandler}>
          {/* <option value='2026'>2026</option> */}
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;