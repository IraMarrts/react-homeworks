import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import style from './Affair.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (f: FilterType) => void
    deleteAffairCallback: (i: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const set = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        props.setFilter(e.currentTarget.value as FilterType)
    }

    const setClass = (filter: FilterType) => {
        return style.button + (props.filter === filter ? ' ' + style.active : '')
    }

    return (
        <div>
            {mappedAffairs}

            <button className={setClass('all')} onClick={set} value={'all'}>All</button>
            <button className={setClass('high')} onClick={set} value={'high'}>High</button>
            <button className={setClass('middle')} onClick={set} value={'middle'}>Middle</button>
            <button className={setClass('low')} onClick={set} value={'low'}>Low</button>

        </div>

    )
}

export default Affairs
