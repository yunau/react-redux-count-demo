import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {atmCreators} from "./state/action-creators/allActions";


function App() {

  const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(atmCreators, dispatch);

  console.log(state);
  console.log(account);  

  return (
    <div className="App">
      <h1>{account}</h1>
      <br></br>
      <button onClick={() => depositMoney(100)}> Deposit</button>
      <button onClick={() => withdrawMoney(100)}> Withdraw</button>
    </div>
  );
}

export default App;
