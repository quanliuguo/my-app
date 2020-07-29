import React, { Component } from 'react'
import withCopyRignt from './withCopyRight'

@withCopyRignt
class myComponent extends Component {
    constructor(){
        super()
        this.state={
            num:2,
            name:'myName'
        }
    }
    render() {
        console.log('this->', this)
        return (
            <div>
                myComponent--- {this.props.name}
            </div>
        )
    }
}

export default myComponent