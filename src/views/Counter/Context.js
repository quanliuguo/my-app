import React, {createContext, Component} from 'react'


const {Provider, Consumer} = createContext()
export const MyConsumer = Consumer

export class MyProvider extends Component{
    
    constructor(){
        super()
        this.state={
            val:100
        }
    }

    increment = ()=>{
        this.setState({
            val:this.state.val + 1
        })
    }

    decrement = ()=>{
        this.setState({
            val:this.state.val - 1
        })
    }

    render(){
        return (
            <Provider value={{
                val:this.state.val,
                increment: this.increment,
                decrement:this.decrement
            }}>
                {this.props.children}
            </Provider>
        )
    }
}