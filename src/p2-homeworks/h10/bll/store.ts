import {LoadingActionType, loadingReducer} from './loadingReducer'
import {combineReducers, createStore, applyMiddleware} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";
import {RequestActionsType, requestReducer} from "../../h13/bll/requestsReducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    request: requestReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

export type AppActionsType = RequestActionsType | LoadingActionType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStoreType, unknown, AppActionsType>
// @ts-ignore
window.store = store // for dev
