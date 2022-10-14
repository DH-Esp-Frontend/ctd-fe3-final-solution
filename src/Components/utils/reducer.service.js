export const initialState = { theme: "light"};

export const actions = {
    SET_THEME_LIGHT: "SET_HEME_LIGHT",
    SET_THEME_DARK: "SET_HEME_DARK",
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actions.SET_THEME_DARK:
            return ({...state, theme: "dark"})
        case actions.SET_THEME_LIGHT:
            return  ({...state, theme: "light"})
        default: {
            return state}
    }
}