import moment from 'moment';
import selectExpenses from '../../selectors/expenses';


const expenses=[{
id:'1',
description:'rent',
amount:'1000',
note:'note',
createdAt:0
},{
id:'2',
description:'Bill',
amount:'12000',
note:'note',
createdAt:moment(0).subtract(4 , 'days').valueOf()
},{
   id:'3',
   description:'Transport',
   amount:'14000',
   note:'note',
   createdAt:moment(0).subtract(4 , 'days').valueOf()

}]


test('this is the testing for expense',()=>{
   const filters={
      text:'',
      sortBy:'date',
      startDate:undefined,
      endDate:undefined
   }
const action= selectExpenses(expenses,filters)
expect(action).toEqual([expenses[1],expenses[2],expenses[0]])
})