import { createStore } from 'redux';

const incrementObject = ({ incrementBy = 1 } = {}) => ({
   type: 'INCREMENT',
   incrementBy

});
const decrementObject = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy
});
const reset = () => ({
   type: 'RESET'
})
const setCount = ({ count }) => ({
   type: 'SET',
   count
})
//reducers

const  createReducer =(state = { count: 0 }, action) => {
   switch (action.type) {
      case 'INCREMENT':
         return {
            count: state.count + action.incrementBy
         }
      case 'DECREMENT':
         return {
            count: state.count - action.decrementBy

         }
      case 'RESET':
         return {
            count: state.count = 0
         }

      default:
         return state;
   }

};

const store = createStore(createReducer);
store.subscribe(() => { console.log(store.getState()) });
store.dispatch(incrementObject({ incrementBy: 5 }));
store.dispatch(decrementObject({ decrementBy: 2 }));
store.dispatch(reset())
store.dispatch(setCount({ count: 1001 }))

