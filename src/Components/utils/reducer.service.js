export const initialState = { theme: "light", data: [] };

export const actions = {
    SET_THEME_LIGHT: "SET_HEME_LIGHT",
    SET_THEME_DARK: "SET_HEME_DARK",
    SET_DATA: "SET_DATA"
}

export const reducer = (state, action) =>{
    switch (action.type) {
        case actions.SET_DATA:{
            return ({...state, data: action.payload})}
        case actions.SET_THEME_DARK:
            return ({...state, theme: "dark"})
        case actions.SET_THEME_LIGHT:
            return  ({...state, theme: "light"})
        default: {
            return state}
    }
}