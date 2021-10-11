type InitialStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingActionType): InitialStateType => {
    switch (action.type) {
        case 'LOAD/SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}
export type LoadingActionType = {
    type: 'LOAD/SET-LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return {
        type: 'LOAD/SET-LOADING',
        isLoading
    }
}