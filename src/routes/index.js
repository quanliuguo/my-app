import {
    // Home,
    // BlogList,
    // CartList,
    // Counter,
    Game,
    // HOC,
    // Like,
    // Artical,
    Users,
    NotFoundPage,
    TodoList
} from '@/views'

export const mainRouter = [
    {
        pathname: '/game',
        component: Game
    },
    {
        pathname: '/404',
        component: NotFoundPage
    }
]

export const userRouter =[
    {
        pathname: '/users',
        component: Users    
    },
    {
        pathname: '/todolist',
        component: TodoList
    }
]