import React ,{ Component } from 'react'
import {MyProvider} from './Context'
import { MyConsumer} from './Context'

class NumberValue extends Component{
    render(){
        return (
            <MyConsumer>
                {({val})=>{
                    return (
                        <span>{val}</span>
                    )
                }}
            </MyConsumer>        
        )
    }
}

class NumberBtn extends Component{
    render(){
        return (
            <MyConsumer>
                {({increment, decrement})=>{
                    const handle = this.props.type === 'add' ? increment : decrement
                    return <button onClick={handle}>{this.props.children}</button>
                }}
            </MyConsumer>
        
        )
    }
}
export default class extends Component {
    render(){
        return(
            <MyProvider>
                <NumberBtn type='add'>+</NumberBtn>
                <NumberValue></NumberValue>
                <NumberBtn type='minus'>-</NumberBtn>
            </MyProvider>
        )
    }
}