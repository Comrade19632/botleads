import axios from 'axios';
import {ADD_LEAD, CREATE_MESSAGE, DELETE_LEAD, GET_ERRORS, GET_LEADS} from "./types";
import {API_URL} from "../index";
import {tokenConfig} from "./auth";

// GET_LEADS
export const getLeads = () => (dispatch, getState) => {
    axios.get(API_URL + 'leads/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type:CREATE_MESSAGE,
                payload: 'leads loaded successfully'
            })
            dispatch({
                type: GET_LEADS,
                payload: res.data
            });
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

export const deleteLead = (id) => (dispatch, getState) => {
    axios.delete(API_URL + `leads/${id}`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type:CREATE_MESSAGE,
                payload: 'Lead deleted'
            })
            dispatch({
                type: DELETE_LEAD,
                payload: id
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
export const addLead = (lead) => (dispatch, getState) => {
    axios.post(API_URL + 'leads/', lead, tokenConfig(getState)).then(
        res => {
            dispatch({
                type:CREATE_MESSAGE,
                payload: 'lead added'
            })
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            })
        }
    ).catch(err => {
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