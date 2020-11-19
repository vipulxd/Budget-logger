import React from 'react' ;
import  ExpenseListItem from './ExpenseItemList';
import {connect} from 'react-redux';
import ExpenseFilter from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    {
      props.expenses.length === 0 ? (
        <p>No expenses</p>
      ) : (
          props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
    }
  </div>

);
// this is the default method to use  the connect API  but it is not recomended to use 
// the varible directly and export it directly
// const  ImportedExpense   =connect((state)=>{ 
// return {
// // this will take objects 
// expenses: state.expenses

// };})(ExpenseList);
// const  ImportedExpense   =connect(mapStateToProps)(ExpenseList);

const mapStateToProps = (state)=>{ 
   return {
   // this will take objects 
 expenses : ExpenseFilter(state.expenses,state.filters)
   
   };}
   export default  connect(mapStateToProps)(ExpenseList);

   
