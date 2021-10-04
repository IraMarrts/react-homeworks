import React from 'react'
import style from "./Message.module.css";
import {messagePropsType} from "./Message";

function AlternativeMessage(props: messagePropsType) {
    return (
        <div className={style.messageIgnat}>


            <div className={style.content}>
                <div>
                    <p className={style.nameIgnat}>{props.name} </p>
                    <p className={style.textIgnat}>{props.message}</p>
                    <p className={style.timeIgnat}>{props.time}</p>
                </div>
            </div>
            <div className={style.angle}/>
            <img className={style.avatarIgnat}
                 src={props.avatar}
                 alt={''}/>
        </div>
    )
}

export default AlternativeMessage
