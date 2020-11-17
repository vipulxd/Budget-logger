export const setTextFilter = (text = '') => ({
   type: 'setTextFilter',
   text
});
export const sortByDate = () =>
   ({
      type: 'SORT_BY_DATE'
   })
export const sortByAmount = () =>
   ({
      type: 'SORT_BY_AMOUNT'
   })
export const setStartDate = (StartDate) =>
   ({
      type: 'SET_START_DATE',
      StartDate
   })

export const setEndDate = (EndDate) =>
   ({
      type: 'SET_END_DATE',
      EndDate
   })




