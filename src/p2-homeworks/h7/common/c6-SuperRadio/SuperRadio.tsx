import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: string[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

// map options with key
    const mappedOptions: JSX.Element[] = options ? options.map((o, i) => (
        <label key={name + '-' + i}>
            <input
                className={s.radioInput}
                type={'radio'}
                name={name}
                value={o}
                onChange={onChangeCallback}
                checked={o === value}
            />
            <span className={s.design}> </span>
            <span className={s.text}>{o}</span>

        </label>
    )) : []

    return (
        <div className={s.customRadio}>
            {mappedOptions}
        </div>
    )
}

export default SuperRadio
