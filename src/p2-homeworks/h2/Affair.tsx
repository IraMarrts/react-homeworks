import React from 'react'
import {AffairType} from "./HW2";
import style from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    const priorityClass = style.priority + ' ' + style[props.affair.priority]
    return (
        <div className={style.list}>
            <div className={style.closeButton}>
                <button onClick={deleteCallback}>X</button>
            </div>
            <div className={style.name}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>

        </div>
    )
}

export default Affair
