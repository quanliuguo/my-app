import React, { Component } from 'react'

const withCopyRight = (YourComponent)=>{
    return class WithCopyRight extends Component {
        render() {
            // console.log('this.props', this.props)
            console.log('this22->', this)
            return (
                <div>
                    <YourComponent {...this.props}/>
                    {/* 这是高阶组件WithCopyRight的内容 */}
                </div>
            )
        }
    }
}
 
export default withCopyRight