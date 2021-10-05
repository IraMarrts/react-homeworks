import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


//Omit исключает свойство из коллекции пропсов
type SuperCheckboxPropsType = Omit<DefaultInputPropsType, 'type'> & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
       //type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута, если Omit - строка не нужна вообще
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        // сделайте так чтоб работал onChange и onChangeChecked
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    const finalInputClassName = `${s.checkbox2} ${className ? className : ''}`

    return (
        <label className={`${s.checkbox} ${s.path}`}>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            <svg viewBox="0 0 21 21">
                <path
                    d="M5,10.75 L8.5,14.25 L19.4,2.3 C18.8333333,1.43333333 18.0333333,1 17,1 L4,1 C2.35,1 1,2.35 1,4 L1,17 C1,18.65 2.35,20 4,20 L17,20 C18.65,20 20,18.65 20,17 L20,7.99769186"> </path>
            </svg>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    // благодаря label нажатие на спан передастся в инпут*}  *
    )
}

export default SuperCheckbox
