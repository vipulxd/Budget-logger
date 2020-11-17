import  moment  from 'moment';

const defaultReducerfilters = {
   text: '',
   sortBy: '',
   startDate: moment().startOf('month'),
   endDate: moment().endOf('month')
};
// this is the filter reducer
export default (state = defaultReducerfilters, action) => {
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