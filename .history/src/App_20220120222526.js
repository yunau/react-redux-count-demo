import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {atmCreators} from "./state/action-creators/allActions";


function App() {

  const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch()

  console.log(state);
  console.log(account);  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
