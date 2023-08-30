
import React from "react";
import './../styles/App.css';
import {useDispatch,useSelector} from 'react-redux'
import { increment,decrement } from "../redux/actions/counterActions";

const App = () => {
  let dispatch=useDispatch()
  let x= useSelector((data)=>data)
  return (
    <div>
       <div><button className="increment" onClick={()=>dispatch(increment())}>increment</button></div> 
        <div><button className="decrement" onClick={()=>dispatch(decrement())}>decrement</button></div>
        <h1>{x}</h1>
    </div>
  )
}

export default App
