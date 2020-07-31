import React, { Component } from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
// import {  } from 'redux'
// import { getPosts } from '../../services'
import { fetchBlogs } from '../../action/blogs'

class BlogList extends Component {
    // prop-types
    constructor(){
        super()
        this.state={
            blogList:{}
        }
    }

    componentDidMount(){
        fetchBlogs()(this.props.dispatch)
    }
    render() {
        const {
            blogList,
            isLoading,
            errMsg
        } = this.props
        const hasError = Boolean(errMsg)

        return (
            isLoading
            ?
            <div>loading...</div> 
            : 
            (hasError
            ?
            <div>{errMsg}</div>
            :
            <div>
            {
                blogList.map(blogItem=>{
                    return <BlogItem key={blogItem.id} {...blogItem}/>
                })
            }
            </div>)
        )
    }
}

const mapStateToProps = state =>({
    blogList:state.blog.list,
    isLoading: state.blog.isLoading,
    errMsg: state.blog.errMsg
})


export default connect(mapStateToProps)(BlogList)