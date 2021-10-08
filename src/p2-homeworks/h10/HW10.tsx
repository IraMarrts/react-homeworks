import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import loader from './project-deadline-progress-bar-animation.gif'
import s from './HW10.module.css'

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()
    const isLoading = useSelector<AppStoreType, boolean>((state) => state.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => dispatch(loadingAC(false)), 9500)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img className={s.loader} src={loader} alt={''}/></div>
                ) : (
                    <div className={s.button}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
