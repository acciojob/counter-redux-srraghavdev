
import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from "../redux/actions/counterActions";

const App = () => {
  let dispatch=useDispatch()
  let x= useSelector((data)=>data)
  return (
    <div className="1">
      <h1 className="4">{x}</h1>
      <button className="increment" onClick={()=>dispatch(decrement())}>increment</button> 
      <button className="decrement" onClick={()=>dispatch(increment())}>decrement</button>
    </div>
  )
}

export default App
