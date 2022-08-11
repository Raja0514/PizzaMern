export const cardReducer = (state = { cardItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExist = state.cardItems.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExist) {
        return {
          ...state,
          cardItems: state.cardItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      }
      
      
      
      
      
      
      else {
        return {
          ...state,
          cardItems: [...state.cardItems, action.payload],
        };
      }

      case "DELETE_FROM_CART":

        return{
          ...state,
          cardItems:state.cardItems.filter(
            (item)=>item._id !== action.payload._id
          )
        }




    default:
      return state;
  }
};

