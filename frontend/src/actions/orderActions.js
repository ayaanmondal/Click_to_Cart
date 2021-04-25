import axios from 'axios'
import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,

    OREDR_DETAILS_REQUEST,
    OREDR_DETAILS_SUCCESS,
    OREDR_DETAILS_FAIL,

    OREDR_PAY_REQUEST,
    OREDR_PAY_SUCCESS,
    OREDR_PAY_FAIL,
    OREDR_PAY_RESET,
} from '../constants/orderConstants'

import { CART_CREATE_ITEMS } from '../constants/cartConstants'

export const createOrder = (order) => async (dispatch, getState) => {
    try{
        dispatch({
            type:ORDER_CREATE_REQUEST
        })

        const { 
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(
            `/api/orders/add/`,
            order,
            config
            )

        dispatch({
            type:ORDER_CREATE_SUCCESS,
            payload:data
        })

        dispatch({
            type:CART_CREATE_ITEMS,
            payload:data
        })
        localStorage.removeItem('cartItems')

    } catch(error){
        dispatch({
            type: ORDER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
       })
    }
}


export const getOrderDetails = (id) => async (dispatch, getState) => {
    try{
        dispatch({
            type:OREDR_DETAILS_REQUEST
        })

        const { 
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.get(
            `/api/orders/${id}/`,
            config
            )

        dispatch({
            type:OREDR_DETAILS_SUCCESS,
            payload:data
        })

    } catch(error){
        dispatch({
            type: OREDR_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
       })
    }
}


export const payOrder = (id, paymentResult) => async (dispatch, getState) => {
    try{
        dispatch({
            type:OREDR_PAY_REQUEST
        })

        const { 
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers:{
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.put(
            `/api/orders/${id}/pay/`,
            paymentResult,
            config
            )

        dispatch({
            type:OREDR_PAY_SUCCESS,
            payload:data
        })

    } catch(error){
        dispatch({
            type: OREDR_PAY_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message
       })
    }
}