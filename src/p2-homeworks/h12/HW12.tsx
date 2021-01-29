import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'lightBlue', 'lightGreen', 'light'];

function HW12() {
    const theme = useSelector<AppStoreType, string>((state) => state.theme.themeColor)

    const dispatch = useDispatch()

    const onChangeCallback = (val: string) => dispatch(changeThemeC(val))

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={s[theme + '-text']}>
                homeworks 12
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect
                options={themes}
                value={theme}
                onChangeOption={onChangeCallback}
            />
            <hr/>
        </div>
    );
}

export default HW12;
