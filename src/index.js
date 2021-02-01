import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// combineReducers : permet de combiner plusieurs reducers 
import { createStore } from 'redux';
import { Provider } from "react-redux";

// on récupère le "gros" réducer créé dans le nouvel index.js 
import reducers from "./reducers";
// par défaut, react ira dans le fichier index.js du dossier reducers
// on créé ensuite notre store avec ce gros reducer
const store = createStore(
  reducers,
  // on ajoute cette ligne de code (github react redux) pour que les infos s'affichent dans la console 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    {/* permet de lier le store à App */}
    {/* toute modification d'un state contenu dans store, va update le render */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// EXEMPLE ICI => se déploie sur plusieurs fichiers 

// // STORE : stocke globalement le state
// // fonction de Redux qui créée le store => on doit l'importer en haut de page

// // ACTIONS: ex => incrémentation 
// const increment = () => {
//   return {
//     // on décrit l'action
//     // une action est toujours en majuscule 
//     type: 'INCREMENT'
//   };
// };

// const decrement = () => {
//   return {
//     // on décrit l'action
//     // une action est toujours en majuscule 
//     type: 'DECREMENT'
//   };
// };

// // REDUCER: APPLIQUER LES ACTIONS SUR LE STORE
// // on donne deux arguments au compteur, 
// // le state et on lui donne une valeur par défaut / l'état initial
// // et une action 
// const counter = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   };
// };

// // createStore prend en argument un reducer
// // ici on a crée le reducer counter
// // les objets de type store ont des options suscribe, cad qu'on les abonne à une vue
// // on crée le store de notre reducer 
// const store = createStore(counter);
// // subscribe prend un component en paramètre une vue(view) (ou à défaut une fonction comme ici)
// // quand une action subscrire est dispatch sur un reducer, ça update la vue 
// store.subscribe(() => console.log(store.getState()));

// // DISPATCH: PERMET D'AJOUTER UNE ACTION A UN REDUCER 
// store.dispatch(increment());
// // retourne 1 dans la console 
// store.dispatch(decrement());
// //retourne 0
// store.dispatch(decrement());
// //retourne -1