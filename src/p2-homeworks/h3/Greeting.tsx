import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: boolean
    totalUsers: number
    addUserByEnter: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, addUserByEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.someClass
    console.log(error)
    return (
        <div>
            <input className={inputClass}
                   value={name}
                   onKeyPress={addUserByEnter}
                   onChange={setNameCallback}
                   onBlur={setNameCallback}
            />
            <button className={s.addButton} disabled={!name} onClick={addUser}>add</button>
            <span className={s.countUsers}>{totalUsers}</span>
            <div className={s.errorWarning}>{error && 'Name is required!'}</div>
        </div>
    )
}

export default Greeting
