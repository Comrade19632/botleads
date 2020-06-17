import axios from 'axios';
import {ADD_LEAD, CREATE_MESSAGE, DELETE_LEAD, GET_ERRORS, GET_LEADS} from "./types";
import {API_URL} from "../index";

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get(API_URL + 'leads/')
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

export const deleteLead = (id) => dispatch => {
    axios.delete(API_URL + `leads/${id}`)
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
export const addLead = (lead) => dispatch => {
    axios.post(API_URL + 'leads/', lead).then(
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