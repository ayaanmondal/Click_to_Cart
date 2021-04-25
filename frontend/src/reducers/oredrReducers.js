import {
    ORDER_CREATE_REQUEST,
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_CREATE_RESET,

    OREDR_DETAILS_REQUEST,
    OREDR_DETAILS_SUCCESS,
    OREDR_DETAILS_FAIL,

    OREDR_PAY_REQUEST,
    OREDR_PAY_SUCCESS,
    OREDR_PAY_FAIL,
    OREDR_PAY_RESET,
} from '../constants/orderConstants'

export const orderCreateReducer = (state={}, action) => {
    switch(action.type){
        case ORDER_CREATE_REQUEST:
            return {
                loading: true
            }

        case ORDER_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                order:action.payload
            }

        case ORDER_CREATE_FAIL:
            return {
                loading: false,
                error:action.payload
            }

        case ORDER_CREATE_RESET:
            return {}
        
        default:
            return state
    }
}

export const orderDetailsReducer = (state={loading:true, orderItems:[], shippingAddress:{}}, action) => {
    switch(action.type){
        case OREDR_PAY_REQUEST:
            return {
                ...state,
                loading: true
            }

        case OREDR_DETAILS_SUCCESS:
            return {
                loading: false,
                order:action.payload
            }

        case OREDR_DETAILS_FAIL:
            return {
                loading: false,
                error:action.payload
            }

        default:
            return state
    }
}


export const orderPayReducer = (state={}, action) => {
    switch(action.type){
        case OREDR_DETAILS_REQUEST:
            return {
                loading: true
            }

        case OREDR_PAY_SUCCESS:
            return {
                loading: false,
                success: true
            }

        case OREDR_PAY_FAIL:
            return {
                loading: false,
                error:action.payload
            }

        case OREDR_PAY_RESET:
            return {}
        
        default:
            return state
    }
}