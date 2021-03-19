export const initialState = {
  basket: [],
};

// reduce method iterates through array and tally up the total and returns a value
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// reducer dispatches action to data layer
// global store similiar to Contextprovider
// reducer listens to actions exa. clicking on add basket and remove from basket
// spread operator pushes the action.item into the empty basket array
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
