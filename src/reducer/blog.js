import actionType from "../action/actionType";

const initState ={
    list:[{
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
    }],
    isLoading:false
}

export default (state= initState, action)=>{
    switch(action.type){
        case actionType.START_FETCH_BLOGS:
            console.log('reducer-start', action)
            return {
                ...state,
                isLoading: true,
            }
        case actionType.FETCH_BLOGS_SUCCESS:
            console.log('reducer-success', action)
            return {
                ...state,
                isLoading:false,
                list:action.payload.list
            }
        case actionType.FETCH_BLOGS_FAILED:
            console.log('reducer-failed', action)
            return {
                ...state,
                isLoading:false,
                errMsg:'有些不正常'
            }
        default:
            console.log('reducer-default', action)
            return state
    }
}