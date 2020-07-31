import actionType from './actionType'
import { getPosts } from '../services'

const startFetchBlogs= () =>{
    return {
        type: actionType.START_FETCH_BLOGS
    }
}

const fetchBlogsSuccess = (payload) =>{
    return {
        type: actionType.FETCH_BLOGS_SUCCESS,
        payload
    }
}

const fetchBlogsFailed = () =>{
    return {
        type: actionType.FETCH_BLOGS_FAILED
    }
}

export const fetchBlogs = () => (dispatch) => {
    console.log('action-startFetch')
    dispatch(startFetchBlogs())
    getPosts()
    .then(resp =>{
        console.log('action-fetchSucess')
        dispatch(fetchBlogsSuccess({
            list:resp.data
        }))
    })
    .catch(error=>{
        dispatch(fetchBlogsFailed())
    })
}