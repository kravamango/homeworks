import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) {
                    return 1
                }
                if (a.name < b.name) {
                    return -1
                }
                return 0
            })

            return action.payload === "up" ? newState : newState.reverse() // need to fix
        }
        case 'check': {

            return state.filter((a) => a.age >= 18) // need to fix
        }
        default:
            return state
    }

}
