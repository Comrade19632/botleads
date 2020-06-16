import axios from 'axios';
import {ADD_LEAD, DELETE_LEAD, GET_LEADS} from "./types";
import {API_URL} from "../index";

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get(API_URL + 'leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload:res.data
            });
        }).catch(err => console.log(err))
}

export const deleteLead = (id) => dispatch => {
    axios.delete(API_URL + `leads/${id}`)
        .then( res => {
            dispatch({
                type: DELETE_LEAD,
                payload : id
            })
        }).catch(err => console.log(err))
}
export const addLead = (lead) => dispatch => {
    axios.post(API_URL + 'leads/', lead).then(
        res => {
            dispatch({
                type:ADD_LEAD,
                payload: res.data
            })
        }
    ).catch(err => console.log(err))
}