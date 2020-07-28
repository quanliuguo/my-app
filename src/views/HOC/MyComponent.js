import React, { Component } from 'react'
import withCopyRignt from './withCopyRight'

class myComponent extends Component {
    constructor(){
        super()
        this.state={
            num:2
        }
    }
    render() {
        return (
            <div>
                myComponent--- {this.props.name}
            </div>
        )
    }
}

export default withCopyRignt(myComponent)