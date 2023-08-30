
import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from "../redux/actions/counterActions";

const App = () => {
  let dispatch=useDispatch()
  let x= useSelector((data)=>data)
  return (
    <div className="1">
       <div className="2"><button className="increment" onClick={()=>dispatch(increment())}>increment</button></div> 
        <div className="3"><button className="decrement" onClick={()=>dispatch(decrement())}>decrement</button></div>
        <h1 className="4">{x}</h1>
    </div>
  )
}

export default App
