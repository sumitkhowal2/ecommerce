// define our states and actions to change state
export const initialState = {
  basket: [],
};
export const total = (basket) =>{
    return(basket.reduce((amount,item)=>amount + item.price,0))
}
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      }
    case "Remove_From_Cart":
        const index = state.basket.findIndex(item => item.id === action.id);
        let newBasket = [...state.basket];
        if(index >=0){
            newBasket.splice(index,1);
        }else{
            console.warn("can't find the id")
        }
    return{
        ...state,basket:newBasket
    }
    default:
        return state
  }
};

export default Reducer;
