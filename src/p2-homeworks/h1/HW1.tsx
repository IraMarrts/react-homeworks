import React from 'react'
import Message, {messagePropsType} from "./Message";
import AlternativeMessage from "./AlternativeMessage";


export const messageData: messagePropsType = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Some Name',
    message: 'some text',
    time: '22:00',
}

const messageData2: messagePropsType = {
    avatar: 'https://media.istockphoto.com/vectors/african-american-happy-girl-learning-coding-vector-id1093952750?k=6&m=1093952750&s=612x612&w=0&h=EpFP4ybywcsjM7lJ3iKA_v7Jd7FiQAARGRQT3r0Avc0=',
    name: 'Coding girl',
    message: 'Делай домашки Игната каждую неделю! Потом задеплоим на Гитхаб) Очень длинное сообщение',
    time: '15:35',
}

function HW1() {
    return (
        <div>
            <hr/>
            homework 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            <AlternativeMessage
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />
            <hr/>
        </div>
    )
}

export default HW1
