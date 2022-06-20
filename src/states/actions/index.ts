import { ActionTypes } from '../action-types';

interface Deposit {
    type:ActionTypes.DEPOSIT;
    payload:number;
}

interface Withdraw {
    type: ActionTypes.WITHDRAW;
    payload:number;
}

interface Bankrupt {
    type:ActionTypes.BANKRUPT;
}


export type Action = Deposit | Withdraw | Bankrupt;