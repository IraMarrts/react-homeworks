import React from 'react'
import {PATH} from "./Routes";
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'

function Header() {

    return (
        <>
            <nav className={s.nav}>

                <NavLink to={PATH.PRE_JUNIOR}
                         activeClassName={s.activeLink}>=pre-junior=</NavLink>

                <NavLink to={PATH.JUNIOR}
                         activeClassName={s.activeLink}>=junior=</NavLink>

                <NavLink to={PATH.JUNIOR_PLUS}
                         activeClassName={s.activeLink}>=junior-plus=</NavLink>

                <span className={s.toggle}> </span>
            </nav>
        </>
    )
}

export default Header
