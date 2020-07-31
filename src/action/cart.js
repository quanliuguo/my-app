import actionType from './actionType'

/* export const increment = (payload) => {
    return{
        type: actionType.CART_COUNT_INCREMENT,
        payload:{
            ...payload
        }
    }
} */
export const increment = (payload) => {
    return dispatch=>{
        setTimeout(()=>{
            dispatch({
                type: actionType.CART_COUNT_INCREMENT,
                payload
            })
        },2000)
    }
}
export const decrement = (payload) => {
    return{
        type: actionType.CART_COUNT_DECREMENT,
        payload
    }
}