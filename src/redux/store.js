import { counterReducer } from "./reducer/counterRedcuer";
import {createStore} from 'redux'


export const store= createStore(counterReducer)