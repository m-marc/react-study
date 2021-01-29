import React from 'react'
import store from '../../../h10/bll/store'
import {Provider} from "react-redux";

export const HW12Decorator = (storyFn: any) => (
    <Provider store={store}>{storyFn()}</Provider>
)