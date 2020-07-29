// 为了避免actionType重复和写错,可以把所有的actionType集中定义
import actionType from "../actions/actionType"

const initState = [
    {id:1, title:'iphone', price:'6666.59', amount:5},
    {id:2, title:'SUMglaxy', price:'4444.21', amount:9}
]

// 定义这个业务的reducer, reducer的写法是两个函数,第一个是state并有一个初始值第二个是action

export default (state = initState, action) =>{
    console.log(action, 'action')
    switch(action.type){
        case actionType.CART_ITEM_DECREMENT:
        return state.map(item=>{
            if(item.id === action.payload.id) {
                item.amount -=1
            }
            return item
        })
        case actionType.CART_ITEM_INCREMENT:
        return state.map(item=>{
            if(item.id === action.payload.id) {
                item.amount +=1
            }
            return item
        })
        default:
            return state
    }
}