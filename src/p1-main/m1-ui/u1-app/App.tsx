import React from 'react'
import s from './App.module.css'
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW1 from "../../../p2-homeworks/h1/HW1";

function App() {
    return (
        <div className={s.App}>
            <div><h1>react homeworks:</h1></div>
            <HW1/>
            <HW2/>
            <HW3/>
            <HW4/>
            {/* <HW5/>*/}

        </div>
    )
}

export default App
