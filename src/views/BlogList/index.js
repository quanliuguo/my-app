import React, { Component } from 'react'
import BlogItem from './BlogItem'
import { connect } from 'react-redux'
import { fetchBlogs } from '../../action/blogs'

class BlogList extends Component {
    //检测props   prop-types
    componentDidMount() {
        // console.log('dis', fetchBlogs)
        fetchBlogs()(this.props.dispatch)
    }
    render() {
        const {
            isLoading,
            list,
        } = this.props
        console.log(this.props)
        return (
            isLoading
            ?
            <div>loading</div>
            :
            <ul>
                {
                    list.map(blog => {
                        return (
                            <BlogItem key={blog.id} {...blog}></BlogItem>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapState = state => ({
    list: state.blog.list,
    isLoading: state.blog.isLoading
})
export default connect(mapState)(BlogList)