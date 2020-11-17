import  {addExpense ,editExpense ,removeExpense } from '../../actions/expenses';

test('Removing the Expense',()=>{
   const  action= removeExpense({id:'424544'})
expect(action).toEqual({
   type:'REMOVE_EXPENSE',
   id:'424544'
})
})
// test('Edit expense', ()=>{
//    const  action =editExpense( '12345', {note:'this is note'})
//    expect(action).toEqual({
//       type:'EDIT_EXPENSE',
//       id:'12345',
//    updates:{
//       note:'this is note'
//    }
//    })
// })
test('This is the testing for add expense',()=>{
const testingvariables={
   description :'Rent bill',
   note:'here',
   amount:'100',
   createdAt:1000
}
const action=(addExpense(testingvariables));
expect(action).toEqual({
   type:'ADD_EXPENSE',
   expense:{
      ...testingvariables,
      id:expect.any(String)
   }
})
})

// this is the tesitng for no objects in expense
test('If no Date is passed On',()=>{
   const testingNull={
      description :'',
      note:'',
      amount:'',
      createdAt:''
   };
   const action=addExpense(testingNull);
   expect(action).toEqual({
      type:'ADD_EXPENSE',
      expense:{
         ...testingNull,
         id:expect.any(String)
      }
   })
})