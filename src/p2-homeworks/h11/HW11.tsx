import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import AlternativeSuperDoubleRange from "./common/c8-SuperDoubleRange/AlternativeSuperDoubleRange";
import AlternativeSuperRange from "./common/c7-SuperRange/AlternativeSuperRange";

function HW11() {
    const [value1, setValue1] = useState(20)
    const [value2, setValue2] = useState(150)

    const onChangeHandler = (value: number) => {
        setValue1(value)
    }

    const onChangeSuperHandler = (values: number[]) => {
        setValue1(values[0])
        setValue2(values[1])
    }
    const minValue = 0
    const maxValue = 100
    return (
        <div>
            <hr/>
            homeworks 11

            {/*    <hr/>
            для личного творчества, могу проверить*/}
            <div>
                <AlternativeSuperRange value={value1}
                                       onChange={onChangeHandler}
                                       min={minValue}
                                       max={maxValue}/>
            </div>
            <div>
                <span>{value1}</span>
                <SuperRange value={value1}
                            onChangeRange={onChangeHandler}
                            min={minValue}
                            max={maxValue}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <AlternativeSuperDoubleRange onChangeHandler={onChangeSuperHandler}
                                             defaultValue={[value1, value2]}
                                             min={minValue}
                                             max={maxValue}
                />
                <hr/>
            </div>
        </div>
    )
}

export default HW11
