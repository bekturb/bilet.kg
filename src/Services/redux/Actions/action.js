
import axios from "axios";
import {ADD_TO_BASKET,
    DELETE__BASKET,
    GET_ADVERTISING,
    GET_ITEMS, GET_PROFILE,
    GET_SEARCH_ITEM,
    GET_SINGLE_ITEM, GET_TIMER, SORT_ITEMS} from "../Types/actionTypes";
import URL  from  '../../../Components/Private/Private'


export const getAdvertising = () => {
    return async (dispatch) => {
        const url = await axios(`${URL.baseURL}/category`)
        const response = await url
        dispatch({type: GET_ADVERTISING, payload: response.data})
    }
}

export const getAllItems = () => {
    return async (dispatch) => {
        const url = await axios(`${URL.baseURL}/event`)
        const response = await url
        dispatch({type: GET_ITEMS, payload: response.data})
    }
}

// export const getCategoryItems = (id) => {
//     return  {type: GET_CATEGORY_ITEMS, payload: id}
// }

export const getSingleItem = (id) => {
    return  {type: GET_SINGLE_ITEM, payload: id}
}


export const getSearchItem = (data) => {
    return  {type: GET_SEARCH_ITEM, payload: data}
}

export const addToBasket = (id) => {

    return {type: ADD_TO_BASKET, payload: id}
}

export const deleteBasket = (id) => {

    return {type: DELETE__BASKET, payload: id}
}
export const getTimeOut = (timer) => {

    return {type: GET_TIMER, payload:timer}
}
export const getSortItems = (value) => {

    return {type: SORT_ITEMS, payload:value}
}

export const getProfile = (data) => {
    return {type: GET_PROFILE, payload: data}
}