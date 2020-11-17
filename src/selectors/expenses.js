import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate, createdAt }) => {
   return expenses.filter((expense) => {
      const startDateMoment = moment(expense.createdAt)
      // const StartMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
      // const endMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
      const StartMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
      const endMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
      return StartMatch && endMatch && textMatch
   }).sort((a, b) => {
      if (sortBy === 'date') {
         return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'amount') {
         return a.amount < b.amount ? 1 : -1;
      }
   });
};
