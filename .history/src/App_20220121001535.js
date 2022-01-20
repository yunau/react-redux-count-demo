
import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {atmCreators} from "./state/action-creators/allActions";


function App() {

  const state = useSelector((state) => state);
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch()

  const {depositMoney, withdrawMoney} = bindActionCreators(atmCreators, dispatch);
  const AC = bindActionCreators(atmCreators, dispatch);
  console.log(AC);

  console.log(state);
  console.log(account);  

  return (
    <div className="App">
      <div style={{marginTop:30}}>
      <b>This is an exercise about using React + Redux</b>
      </div>
      <h3>{account}</h3>
      <br></br>
      <button onClick={() => depositMoney(1)}><b>+</b></button>
      <button onClick={() => withdrawMoney(1)}><b>-</b></button>
    </div>
  );
}

export default App;
