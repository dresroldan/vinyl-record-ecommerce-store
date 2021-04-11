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
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case 'REMOVE_FROM_BASKET':
      // find index function is going through all of the basket items and checks if any of the basket items id match the action id that is passed in
      // findIndex will find the first match and return
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      // make a copy of the new basket
      let newBasket = [...state.basket];

      // if it finds the match return
      if (index >= 0) {
        newBasket.splice(index, 1);
        // else warn
      } else {
        console.warn(`Cannot remove product (id: ${action.id} )from `);
      }

      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
