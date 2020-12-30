export const homeWorkReducer = (state: any, action: any): any => {
    switch (action.type) {
        case "sort": {
            let newState = [...state];
            if (action.payload == "up")
                 newState.sort( (a,b) => a.name > b.name ? 1 : -1)
            if (action.payload == "down")
                newState.sort( (a,b) => a.name < b.name ? 1 : -1)
            return  newState
        }
        case "check": {
            let newState = [...state];
            return newState.filter(a => a.age > 17)
        }
        default: return state
    }
};