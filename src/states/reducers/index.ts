import { combineReducers } from "redux";
import accountReducer from "./BankReducer";


const reducers = combineReducers({
    bank:accountReducer
})

export default reducers;
export type State = ReturnType<typeof reducers>;