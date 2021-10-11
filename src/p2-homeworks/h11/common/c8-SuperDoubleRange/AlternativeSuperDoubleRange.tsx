import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from "react";

const {createSliderWithTooltip} = Slider;
const Range = createSliderWithTooltip(Slider.Range);

type PropsType = {
    defaultValue: number[]
    onChangeHandler: (values: number[]) => void
    min: number
    max: number
}

const AlternativeSuperDoubleRange: React.FC<PropsType> = ({defaultValue, onChangeHandler, min, max}) => {

    return (
        <>
            <Range
                onChange={onChangeHandler}
                marks={{
                    [min]: `$ {min}`,
                    [max]: `$ {max}`
                }}
                min={min}
                max={max}
                defaultValue={defaultValue}
                tipFormatter={(value: number) => `$ ${value}`}
                tipProps={{
                    placement: "bottomRight",
                    visible: true
                }}
                pushable={10}
            />
        </>
    )
}

export default AlternativeSuperDoubleRange;