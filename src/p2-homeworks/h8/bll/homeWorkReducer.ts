import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: ActionsType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let copyState = [...state]

            //сортировка с отработкой случая, когда значения равны
            copyState = copyState.sort((a, b) => {
                if (a.name.toUpperCase() <= b.name.toUpperCase()) return -1
                else if (a.name.toUpperCase() >= b.name.toUpperCase()) return 1
                else return 0
            })

            return (action.payload === 'up') ? copyState : copyState.reverse()
        }
        case 'check': {
            return state.filter(u => u.age > 18)
        }
        default:
            return state
    }
}

export const sortPeople = (condition: string) => ({type: 'sort', payload: condition} as const)

export const checkUpPeople = (age: number) => ({type: 'check', payload: age} as const)

type  ActionsType = ReturnType<typeof sortPeople> | ReturnType<typeof checkUpPeople>