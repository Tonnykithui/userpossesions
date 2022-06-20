import { Dispatch } from "redux"
import { ActionTypes } from "../action-types"
import { Action } from "../actions"

export const deposit = (amount:number) => {
    return (dispath : Dispatch<Action>) => {
        dispath({
            type:ActionTypes.DEPOSIT,
            payload:amount
        })
    }
}

export const withdraw = (amount:number) => {
    return (dispath : Dispatch<Action>) => {
        dispath({
            type:ActionTypes.WITHDRAW,
            payload:amount
        })
    }
}

export const bankrupt = () => {
    return (dispath : Dispatch) => {
        dispath({
            type:ActionTypes.BANKRUPT
        })
    }
}