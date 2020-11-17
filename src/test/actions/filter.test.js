// filters testing
import moment from 'moment';
import {setTextFilter ,  sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filter';

test('testing for filters set Start Date',()=>{
   const  action=setStartDate(moment(0));
   expect(action).toEqual({
      type:'SET_START_DATE',
      StartDate:moment(0)

   })
})
test('This is the test for set end Date',()=>{
   const action= setEndDate(moment(0));
   expect(action).toEqual({
      type:'SET_END_DATE',
      EndDate:moment(0)
   })
})
test('this is the testing for setTextFilter',()=>{
   const action = setTextFilter('Bill');
   expect(action).toEqual({
      type:'setTextFilter',
      text:'Bill'
   })
})
test('THis is the test for  sortBy Amount',()=>{
 expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})
test('This is the testing for sort by Date ',()=>{
   expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})

