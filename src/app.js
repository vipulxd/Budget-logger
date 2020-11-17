import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filter';
import getVisbleExpenses from './selectors/expenses';
import  {Provider} from 'react-redux';

const store =configureStore();

const state = store.getState();
const visibleExpense = getVisbleExpenses(state.expenses,state.filters)
console.log(visibleExpense)
// this has the provider whch will give the access of the store to every component
const jsx =(

   <Provider store ={store} > 
   
   <AppRouter />
   </Provider>


);

ReactDOM.render(jsx, document.getElementById('appRoot'))








