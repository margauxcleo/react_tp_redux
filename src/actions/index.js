// on met un export devant chaque action pour pouvoir les récupérer ailleurs 
export const increment = () => {
  return {
    // on décrit l'action
    // une action est toujours en majuscule 
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    // on décrit l'action
    // une action est toujours en majuscule 
    type: 'DECREMENT'
  };
};

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    };
};

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    };
};