import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов


    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        //проверка введенного имени, чтобы работал onBlur
        e.currentTarget.value ? setError(false) : setError(true)
    }

    const addUser = () => {
        //удаляем лишние пробелы в начале и конце
        if (name.trim()) {
            addUserCallback(name.trim())
            alert(`Hello ${name.trim()}!`)
        } else {
            setError(true)
        }
        //очищаем инпут
        setName('')
    }
    const addUserByEnter = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && name) {
            addUser()
        } else {
            setError(true)
        }
    }
    const totalUsers = users.length
    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            addUserByEnter={addUserByEnter}
        />
    )
}

export default GreetingContainer
