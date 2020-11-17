import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect } from 'react-redux';
import {addExpense} from  '../actions/expenses';
const Create= (props) => (
   <div>
   <p> Add your Expenses here</p>
<ExpenseForm 
onSubmit={(expense)=>{
props.dispatch(addExpense(expense));
props.history.push('/')
}} />
   </div>
);
export default connect(addExpense)(Create)