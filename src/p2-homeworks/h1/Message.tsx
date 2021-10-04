import React from 'react'
import style from './Message.module.css'


export type messagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messagePropsType) {
    return (
        <div>
            <img className={style.userImage}
                 src={props.avatar}
                 alt={''}/>
            <div className={style.speechBubble}>
                <div>
                    <p className={style.name}>{props.name} </p>
                    <p className={style.message}>{props.message}</p>
                    <p className={style.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
