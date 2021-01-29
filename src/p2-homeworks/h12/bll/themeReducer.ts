enum ACTIONS_TYPE {
    CHANGE_THEME = 'HW12/CHANGE_THEME'
}

type ThemeType = {
    themeColor: string
}

const initState: ThemeType = {
    themeColor: "dark"
};

type changeThemeC = {
    type: ACTIONS_TYPE.CHANGE_THEME,
    payload: {
        themeColor: string
    }
}

export const themeReducer = (state = initState, action: changeThemeC): ThemeType => { // fix any
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_THEME: {
            return {
                ...state,
                themeColor: action.payload.themeColor
            }
        }
        default: return state;
    }
};

export const changeThemeC = (themeColor: string): changeThemeC => {
    return {type: ACTIONS_TYPE.CHANGE_THEME, payload: {themeColor}}
};