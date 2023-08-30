
import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from "../redux/actions/counterActions";

const App = () => {
  let dispatch=useDispatch()
  let x= useSelector((data)=>data)
  return (
    <div>
        <button className="increment" onClick={()=>dispatch(increment())}>Increment</button>
        <button className="increment" onClick={()=>dispatch(decrement())}>Decrement</button>
        <h1 className="output">{x}</h1>
    </div>
  )
}

export default App
