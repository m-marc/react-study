const initState = false;

export type showLoaderActionType = {
    type: 'SHOW-LOADER',
    isLoading: boolean
}

export const loadingReducer = (state = initState, action: showLoaderActionType): boolean => {
    switch (action.type) {
        case "SHOW-LOADER": {
            state = action.isLoading
            return state;
        }
        default: return state;
    }
};

export const loadingAC = (isLoading: boolean): showLoaderActionType => {
    return {type: 'SHOW-LOADER', isLoading}
};