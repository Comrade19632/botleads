import axios from 'axios'
import {
    AUTH_ERROR,
    CREATE_MESSAGE,
    GET_ERRORS,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS, REGISTER_FAIL, REGISTER_SUCCESS,
    USER_LOADED,
    USER_LOADING
} from "./types";
import {API_URL} from "../index";


export const loadUser = () => (dispatch, getState) => {
    dispatch({type: USER_LOADING});


    axios.get(API_URL + 'auth/user', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
        dispatch({
            type: AUTH_ERROR
        })
    })
}

export const login = (username, password) => (dispatch) => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify(({username, password}));

    axios.post(API_URL + 'auth/login', body, config)
        .then(res => {
            dispatch({
                type: CREATE_MESSAGE,
                payload: 'Login success'
            })
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
        dispatch({
            type: LOGIN_FAIL
        })
    })
}

export const register = ({username, password, email}) => (dispatch) => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    const body = JSON.stringify(({username, password, email}));

    axios.post(API_URL + 'auth/register', body, config)
        .then(res => {
            dispatch({
                type: CREATE_MESSAGE,
                payload: 'Register success'
            })
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            })
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
        dispatch({
            type: REGISTER_FAIL
        })
    })
}


export const logout = () => (dispatch, getState) => {
    tokenConfig(getState);

    axios.post(API_URL + 'auth/logout', null, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: CREATE_MESSAGE,
                payload: 'Logout success'
            })
            dispatch({
                type: LOGOUT_SUCCESS,
            })
        }).catch(err => {
        const errors = {
            msg: err.response.data,
            status: err.response.status
        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        })
    })
}

export const tokenConfig = getState => {
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
}