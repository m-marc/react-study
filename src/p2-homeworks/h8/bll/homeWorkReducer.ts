import {person} from "../HW8";

type ActionType = sortActionType | checkActionType

export interface sortActionType {
    type: string
    payload: string
}

export interface checkActionType {
    type: string
    payload: number
}

export const homeWorkReducer = (state: person[], action: ActionType): person[] => {
    switch (action.type) {
        case "sort": {
            let newState = [...state];
            if (action.payload === "up")
                 newState.sort( (a,b) => a.name > b.name ? 1 : -1)
            if (action.payload === "down")
                newState.sort( (a,b) => a.name < b.name ? 1 : -1)
            return  newState
        }
        case "check": {
            return state.filter(a => a.age > 17)
        }
        default: return state
    }
};