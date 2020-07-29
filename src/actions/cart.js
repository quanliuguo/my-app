import actionType from './actionType'

/* action 有两种写法 */
/* 第一种,写成一个对象,这是标准的aciton,但是问题是不方便传递动态参数 */
// export const increment = {
//     type:actionType.CART_ITEM_DECREMENT,
//     payload:{
//        ...
//     }
// }

/* 工作中常用的一种方式是定义一个函数,返回action对象,我们把它叫做actionCreators
    定义成一个函数,返回action对象
*/
export const increment = (id)=>({
    type:actionType.CART_ITEM_INCREMENT,
    payload:{
        id
    }
})

export const decrement = (id) =>({
    type:actionType.CART_ITEM_DECREMENT,
    payload:{
        id
    }
})
