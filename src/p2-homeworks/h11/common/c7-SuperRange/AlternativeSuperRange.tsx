import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import React from "react";

type SuperRangePropsType = {
    value: number
    onChange: (value: number) => void
    min: number
    max: number
}

const AlternativeSuperRange: React.FC<SuperRangePropsType> = ({value, onChange, min, max}) => {
    return (
        <Slider
            value={value}
            min={min}
            max={max}
            step={1}
            ariaLabelledByForHandle={`${value}`}
            onChange={value => {
                onChange(value)
            }}
        />
    )
}
export default AlternativeSuperRange;