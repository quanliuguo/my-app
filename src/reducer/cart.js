import actionType from '../action/actionType'

const stateInit = [
    {id:1, name:"iphone", price: 100.00, count:50},
    {id:2, name:"huawei", price: 66.00, count:10}
]

export default function (state = stateInit, action){
    console.log('reducer')
    switch(action.type){
        case actionType.CART_COUNT_INCREMENT:
        return state.map(item=>{
            if(item.id === action.payload.id){
                item.count += 1 
            }
            return item
        })
        // break;
        case actionType.CART_COUNT_DECREMENT:
        return state.map(item=>{
            if(item.id === action.payload.id){
                item.count -= 1 
            }
            return item
        })
        // break;
        default:
            return state
            // break;
    }
}