import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseFilteredList from './ExpenseFilteredList';
const expense = () => (
   <div>
  <p>This is the main page </p>
<ExpenseFilteredList />
<ExpenseList  />
   </div>
);
export default expense