import React, { Component } from 'react'

const noop=()=>{}
export default class TodoItem extends Component {
    constructor(){
        super()
        this.state={
        }
    }

    handleChange=()=>{
        console.log(this.props, 1111)
        const { changeTaskStatus=noop ,id } = this.props
        changeTaskStatus(id)
        // e.currentTarget.checked=!e.currentTarget.checked
    }
    render() {
        console.log('item.render', this.props)
        return (
            <li>
                {/* {this.props.title}  <i>{this.props.isCompleted? '已完成' :'未完成'}</i> */}
              <input
                id={this.props.id}
                type='checkbox'
                name={this.props.name}
                checked={this.props.isCompleted}
                onChange={this.handleChange}
              />
                <label htmlFor={this.props.id}>
                    {this.props.name}
                </label>{'************'}  
                <i>{this.props.isCompleted? '已完成' :'未完成'}</i>
            </li>
        )
    }
}
