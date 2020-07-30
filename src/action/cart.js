import actionType from './actionType'

export const increment = (payload) => {
    return{
        type: actionType.CART_COUNT_INCREMENT,
        payload:{
            ...payload
        }
    }
}
export const decrement = (payload) => {
    return{
        type: actionType.CART_COUNT_DECREMENT,
        payload:{
            ...payload
        }
    }
}