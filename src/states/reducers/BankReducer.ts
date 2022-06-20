import { ActionTypes } from "../action-types";
import { Action } from "../actions";

const initState = 0;

const accountReducer = (state:number = initState, action:Action) => {
    switch (action.type) {
        case ActionTypes.DEPOSIT:
            return state + action.payload;
            
        case ActionTypes.WITHDRAW:
            return state - action.payload;

        case ActionTypes.BANKRUPT:
            return 0;
            
        default:
            return state;
    }
}

export default accountReducer;