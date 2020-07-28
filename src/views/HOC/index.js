import React, { Component } from 'react'
import MyComponent from './MyComponent'

export default class Hoc extends Component {
    render() {
        return (
            <div>
                <MyComponent name='自定义组件name'></MyComponent>
            </div>
        )
    }
}
