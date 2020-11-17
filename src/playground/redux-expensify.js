import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
// this is the defaul object for the filters 

//actions for expense Reducer 
const addExpense = (
   {
      description = '',
      note = '',
      amount = '',
      createdAt = undefined
   } = {}) => ({
      type: 'ADD_EXPENSE',
      expense: {
         id: uuid(),
         description,
         note,
         amount,
         createdAt
      }
   });

const removeExpense = (
   { id } = {}) => ({
      type: 'REMOVE_EXPENSE',
      id
   });

const editExpense = ({ id, updates } = {}) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates

})



// this is the expense Reducer 
// the features will be added for the expenseReducer
// the action will be added to the expense reducer because the filter reducer doesnt have to 
// do anything with the added expense its just three for the filter purposes
const expenseReducer = (state = [], action) => {
   switch (action.type) {
      case 'ADD_EXPENSE':
         return [...state, // take the current items and
         action.expense // after that add the expense or the new one 
         ];
      case 'REMOVE_EXPENSE':
         return state.filter(({ id }) => {// it return the new array if the the return is not equal
            //if id doesnt match the item will be kept if the id match it return false and the 
            // array filter will happen
            return id !== action.id;
         });
      case 'EDIT_EXPENSE':
         return state.map((expense) => {
            if (expense.id === action.id) {
               return {
                  ...expense,
                  ...action.updates
               }
            } else {
               return expense;
            };
         })
      default:
         return state;
   }
}

const setTextFilter = (text = '') => ({
   type: 'setTextFilter',
   text
});
const sortByDate = () =>
   ({
      type: 'SORT_BY_DATE'
   })
const sortByAmount = () =>
   ({
      type: 'SORT_BY_AMOUNT'
   })
const setStartDate = (StartDate) =>
   ({
      type: 'SET_START_DATE',
      StartDate
   })

const setEndDate = (EndDate) =>
   ({
      type: 'SET_END_DATE',
      EndDate
   })






const defaultReducerfilters = {
   text: '',
   sortBy: '',
   startDate: 'undefined',
   endDate: 'undefined'
};
// this is the filter reducer
const filterReducer = (state = defaultReducerfilters, action) => {
   switch (action.type) {
      case 'setTextFilter':
         return { // object spread 
            ...state,
            text: action.text
         }
      case 'SORT_BY_AMOUNT':
         return {
            ...state,
            sortBy: 'amount'
         }
      case 'SORT_BY_DATE':
         return {
            ...state,
            sortBy: 'date'
         }
      case 'SET_START_DATE':
         return {
            ...state,
            startDate: action.StartDate
         }
      case 'SET_END_DATE':
         return {
            ...state,
            endDate: action.EndDate
         }
      default:
         return state;
   }
}
// get expenses
const GetVisibleExpenses = (expenses, {text ,sortBy,startDate, endDate }) => {
   return expenses.filter((expense) => {
      const StartMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      const endMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase())
      return StartMatch && endMatch && textMatch
   }).sort((a,b)=>{
 if(sortBy ==='date'){
    return a.createdAt < b.createdAt ? 1:-1;
 }else if(sortBy==='amount'){
    return a.amount < b.amount ? 1 :-1;
 }
   });
};

// this the the store for the expenses and filter  and it is combined with the combineReducers

const store = createStore(
   combineReducers({
      expenses: expenseReducer,
      filter: filterReducer
   })
)
store.subscribe(() => {
   const state = store.getState();
   const VisibleExpense = GetVisibleExpenses(state.expenses, state.filter);
   console.log(VisibleExpense);
})

// the store object gives back the objects so store it in a variable and 
// use that to get the information

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2000, createdAt:- 100000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Laundry', amount: 3000, note: 'Pay At the end', createdAt: -2000 }));
// store.dispatch(editExpense(expenseTwo.expense.id,{amount:100}));
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(setTextFilter('Lau'));
// store.dispatch(sortByDate());
// store.dispatch(sortByAmount());
// store.dispatch(setStartDate(3000)); // this must be smaller than createdAt
// store.dispatch(setEndDate(-1000)); // this will check for the expense created after the endDate
