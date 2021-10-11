const initState = {
    theme:  'red'
 }

 type initialStateType = {
    theme: string
 }
export const themeReducer = (state = initState, action: ReturnType<typeof changeThemeC>): initialStateType => { // fix any
    switch (action.type) {
        case "SET-THEME": {
            return {...state, theme: action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string): any => {
    return {
        type: "SET-THEME",
        theme
    }
}; // fix any