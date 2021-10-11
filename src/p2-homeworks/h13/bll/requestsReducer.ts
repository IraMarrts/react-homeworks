import {requestAPI} from "../api/RequestsAPI";
import {Dispatch} from "react";
import {AppActionsType, AppStoreType} from "../../h10/bll/store";

export type InitialStateType = {
    isChecked: boolean
    message: string | null
}
const initState: InitialStateType = {
    isChecked: false,
    message: null
}
export type RequestActionsType = sendTestRequestActionType | setMessageActionType
export const requestReducer = (state = initState, action: RequestActionsType): InitialStateType => {
    switch (action.type) {
        case 'REQUEST/SET-CHECKED':
            return {...state, isChecked: !action.isChecked}

       case 'REQUEST/SET-MESSAGE':
            return {...state, message: action.message}
        default:
            return state
    }
}
type sendTestRequestActionType = {
    type: 'REQUEST/SET-CHECKED'
    isChecked: boolean
}
type setMessageActionType = {
    type: 'REQUEST/SET-MESSAGE'
    message: string
}

export const sendTestRequestAC = (isChecked: boolean): sendTestRequestActionType => {
    return {
        type: 'REQUEST/SET-CHECKED',
        isChecked
    } as const
}
export const setMessageAC = (message: string): setMessageActionType => {
    return {
        type: 'REQUEST/SET-MESSAGE',
        message
    }
}

export const sendTestRequestTC = () => {
    return (dispatch: Dispatch<AppActionsType>, getState: () => AppStoreType) => {
        let state = getState().request
        let body = {success: state.isChecked}
        requestAPI.authTest(body)
            .then(res => {
                dispatch(setMessageAC(res.errorText))
            })
            .catch((error)=>{
                dispatch(setMessageAC(error.toString()))

                }
            )
    }
}

