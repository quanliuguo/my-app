import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
class BackHome extends Component {
    goHome = ()=> {
        console.log('this.', this.props)
        this.props.history.push('/home')
    }

    render() {
        return (
            <button onClick={this.goHome}>返回首页</button>
        )
    }
}
export default withRouter(BackHome)
