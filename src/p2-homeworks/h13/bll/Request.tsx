import React from 'react';
import SuperButton from "../../h4/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../h4/common/c3-SuperCheckbox/SuperCheckbox";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../h10/bll/store";
import {sendTestRequestAC, sendTestRequestTC} from "./requestsReducer";

function Request() {
    const dispatch = useDispatch()
    const isChecked = useSelector<AppStoreType, boolean>(state => state.request.isChecked)
    const message = useSelector<AppStoreType, string | null>(state => state.request.message)
    const onChangeCheckedHandler = () => {
        dispatch(sendTestRequestAC(isChecked))
    }

    const onClickHandler = () => {
        dispatch(sendTestRequestTC())
    }
    return (
        <div>

            <SuperCheckbox checked={isChecked} onChangeChecked={onChangeCheckedHandler}/>

            <SuperButton onClick={onClickHandler}> send Request</SuperButton>
            {message && <div>{message}</div>}
        </div>
    )
}

export default Request;