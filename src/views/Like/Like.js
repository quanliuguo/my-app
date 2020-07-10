import React, { Component } from 'react'

export default class Like extends Component {
    constructor(){
        super()
        this.state={
            isLiked:true
        }
    }
    handleClick= ()=>{
        this.setState((prevState)=>{
            return{
                isLiked:!prevState.isLiked
            }
    },()=>{
        console.log('回调获取新的state->', this.state)
    })
    }
    render() {
        return (
            <div style={{paddingLeft:'100px'}}>
                <span onClick={this.handleClick}>
                    {this.state.isLiked?'❤️':'🤍'}
                </span>
            </div>
        )
    }
}
