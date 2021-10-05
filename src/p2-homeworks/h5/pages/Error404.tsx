import React from 'react'
import errorImg from './error.gif'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.error}>
            <img src={errorImg} alt={''} className={s.errorImg}/>
            {/*<div>404</div>
            <div>Page not found!</div>
            <div>—ฅ/ᐠ.̫ .ᐟ\ฅ—</div>*/}
        </div>
    )
}

export default Error404
