import React from "react";
import {Slider} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        width: 200,
        margin: '0 auto',
        display: 'inline-block',
        padding: '0 10px'
    }
})

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number | number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
    const handleChange = (event: any, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as number[])
    }
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Slider
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    );
}

export default SuperDoubleRange;
