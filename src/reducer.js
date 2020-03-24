const initialState = {
    Shops: [],
    Menus: []
}

const reducer = (state = initialState, action) => {
    let data = {}
    switch(action.type) {
        case 'GET_ALL_SHOPS':
           data = {
               ...state,
               Shops: action.playload
           } 
           return data
        case 'GET_ALL_MENUS':
            data = {
                ...state,
                Menus: action.playload
            }
            return data
        default:
            break;
    }
    return state;
}

export default reducer;