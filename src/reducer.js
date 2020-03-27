const initialState = {
    Shops: [],
    Menus: [],
    Users: [],
    Profile:{
        IsLogin: false 
    }
}

const reducer = (state = initialState, action) => {
    let data = {};

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
        case 'ADD_USER':
            data = {
                ...state,
                Users:[action.playload, ...state.Users] 
            }
            return data
        case 'GET_ALL_USERS':
            data = {
                ...state,
                Users: action.playload
            }
            return data
        case 'USER_LOGIN':
            if (action.playload.IsLogin) {
                data = {
                    ...state,
                    Profile: action.playload
                }
            }else {
                data = {
                    ...state,
                    Profile: {IsLogin: false}
                }
            }
            return data
        case 'ADD_SHOP':
            data = {
                ...state,
                Shop:[action.playload, ...state.Shops]
            }
            return data
        default:
            break;
    }
    return state;
}

export default reducer;