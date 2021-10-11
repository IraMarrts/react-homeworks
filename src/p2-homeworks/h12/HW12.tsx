import React from "react";
import s from "./HW12.module.css";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";

const themes = ['dark', 'red', 'green', 'blue', 'yellow'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme); // useSelector

    // useDispatch, onChangeCallback

    const dispatch = useDispatch()

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <div><SuperRadio
                name={'radio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
