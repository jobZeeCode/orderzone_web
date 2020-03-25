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
           console.log(data);
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
            data = {
                ...state,
                Profile: action.playload
            }
            return data
        default:
            break;
    }
    return state;
}

export default reducer;