// the action will be added to the expense reducer because the filter reducer doesnt have to 
// do anything with the added expense its just three for the filter purposes
export default  (state = [], action) => {
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
