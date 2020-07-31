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
        return (
            this.props.isLoading?
            <div>loading...</div> : 
            <div>
                {
                  this.props.blogList.map(blogItem=>{
                      return <BlogItem key={blogItem.id} {...blogItem}/>
                  })
                }
            </div>
        )
    }
}

const mapStateToProps = state =>({
    blogList:state.blog.list,
    isLoading: state.blog.isLoading
})

export default connect(mapStateToProps)(BlogList)