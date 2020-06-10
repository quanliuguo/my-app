const list=[
    {id:1,seq:1, status:0, content:'吃饭'},
    {id:2,seq:2, status:0, content:'睡觉'},
    {id:3,seq:3, status:0, content:'打豆豆'},
    {id:4,seq:4, status:0, content:'paoniu'}
]
function initTodolist(list){
    sessionStorage.setItem('todolist', list instanceof Object ? JSON.stringify(list) )
}