import './App.css';
// hook de la librairie react-redux
import { useSelector, useDispatch } from "react-redux";

// on fait du destructuring pour importer nos actions 
import { increment, decrement, signIn, signOut } from "./actions";

function App() {
  console.log(useSelector((state) => state));
  // renvoi l'objet avec nos reducers 
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.isLoggedReducer);
  const dispatch = useDispatch();

  //soit on crée la fonction à part et on l'appelle après dans le return
  const handleIncrement = (event) => {
    event.preventDefault();
    dispatch(increment());
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    dispatch(signIn());
  }

  const handleSignOut = (event) => {
    event.preventDefault();
    dispatch(signOut());
  }

  return (
    <div className="App">
      <h1>Counter { counter }</h1>
      <button onClick={handleIncrement}>+</button>
      {/* soit on écrit directement la fonction ici */}
      <button onClick={() => dispatch(decrement())}>-</button>
      { isLogged ? <button onClick={handleSignOut}>Déconnexion</button>
       : <button onClick={handleSignIn}>Connexion</button>}
      { isLogged ? <p>Informations secrètes</p> : ""}
    </div>
  );
};

export default App;
