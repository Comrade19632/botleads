import axios from 'axios';
import {GET_LEADS} from "./types";
import {API_URL} from "../index";

// GET_LEADS
export const getLeads = () => dispatch => {
    axios.get(API_URL + 'api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload:res.data
            });
        }).catch(err => console.log(err))
}