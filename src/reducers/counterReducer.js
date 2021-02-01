// REDUCER: APPLIQUER LES ACTIONS SUR LE STORE
// on donne deux arguments au compteur, 
// le state et on lui donne une valeur par défaut / l'état initial
// et une action 
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  };
};

export default counterReducer;