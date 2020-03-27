import axios from 'axios';
const URL = 'https://storied-shore-271710.appspot.com';

export const getShops = () => {
    return(dispatch) => {
        axios.get(URL+'/shop').then((res)=> {
            dispatch({
                type: 'GET_ALL_SHOPS',
                playload: res.data
            });
        });
    }
}

export const getMenus = () => {
    return(dispatch) => {
        axios.get(URL+'/menu').then((res)=> {
            dispatch({
                type: 'GET_ALL_MENUS',
                playload: res.data
            });
        });
    }
}

export const getAllUsers = (data) => {
    return(dispatch) => {
        axios.get(URL+'/user').then((res)=> {
            dispatch({
                type: 'GET_ALL_USERS',
                playload: res.data
            });
        });
    }
}

export const addUser = (data) => {
    return(dispatch) => {
        axios.post(URL+'/user', data).then((res)=> {
            dispatch({
                type: 'ADD_USER',
                playload: res.data
            });
        });
    }
}

export const loginUser = (data) => {
    return(dispatch) => {
        axios.post(URL+'/user/login', data).then((res)=> {
            dispatch({
                type: 'USER_LOGIN',
                playload: res.data
            });
        });
    }
}

export const addShop = (data) => {
    return(dispatch) => {
        axios.post(URL+'/shop', data).then((res)=> {
            dispatch({
                type: 'ADD_SHOP',
                playload: res.data
            });
        });
    }
}