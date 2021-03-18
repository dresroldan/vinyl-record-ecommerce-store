export const initialState = {
  basket: [],
};

// reducer dispatches action to data layer
// global store similiar to Contextprovider 
// reducer listens to actions exa. clicking on add basket and remove from basket 

export const reducer = (state, action) => {
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