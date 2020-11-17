import {createStore} from 'redux';
// this is  the declaration for the redux store
// the state is the default and it will pass the defau;t value as
// as 0 

 // this is a arrow function to call increment 
// const incrementObject  =()=>{
//    return {
//       type:'INCREMENT'
//    }
// }
// the incrementBy is used as a default object also
// const incrementObject = ({incrementBy ={}})
const incrementObject =({incrementBy=1}={})=>({
   type:'INCREMENT',
   // incrementBy:typeof incrementer.incrementBy ==='number'? incrementer.incrementBy:1
incrementBy

});
const  decrementObject =({decrementBy=1}={})=>({
type:'DECREMENT',
decrementBy
});
const reset =()=>({
   type:'RESET'
})
const setCount =({count})=>({
type:'SET',
count
})

const store = createStore((state={count:0}, action)=>{
   switch(action.type){
      case 'INCREMENT':
      // const incrementBy =typeof action.incrementBy==='number' ? action.incrementBy :1;   case 'INCREMENT':
return{
   count:state.count + action.incrementBy
}
case 'DECREMENT':
   // decrement using an const 
   // const  decrementBy = typeof action.decrementBy==='number'? action.decrementBy : 1;
   return{
      count:state.count - action.decrementBy
      
   }
   case 'RESET':
      return{
         count:state.count =0
      }

default:
   return state;
}

});

// this will perform a function every time  the store is called or dispatched
store.subscribe(()=>{
   console.log(store.getState())
});

//the return value from subscribe will stop it from performing the sunction for that 
// const unsubscribe = store.subscribe(()=>{
//    console.log(store.getState());
// })

// this is an object which is passed to the action and it will update the count 
// this is not prefered because if there is a speel mistale then error would occur
// store.dispatch({
//    type:'INCREMENT'
// }) 
store.dispatch(incrementObject({incrementBy: 5})); 

// store.dispatch({
//    type:'INCREMENT',
//    incrementBy : 100
// })


// the function is called and the increment action will be logged only and
// the other two will not because it is unsubscribed now 
// unsubscribe();

store.dispatch(decrementObject({decrementBy:2}));

// store.dispatch({
//    type:'DECREMENT' ,
//    // value for decrementation
//    decrementBy:10
// })
// store.dispatch({
//    type:'RESET'
// })
// the store will be called twice when the store is created and once the store is created
// the getState will give the state value 
// by default the state is set to one so one will be shownw to console
store.dispatch(reset())
store.dispatch(setCount({count:1001}))

