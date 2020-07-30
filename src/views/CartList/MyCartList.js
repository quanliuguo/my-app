import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement} from '../../action/cart'

class MyCartList extends Component {
    constructor(){
        super()
        this.state={
            cartList:[]
        }
    }

    componentDidMount(){
        console.log('prop.state', this.props)
        this.setState({
            cartList:this.props.cartList
        })
    }

    render() {
        console.log('props', this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>型号</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.cartList.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={()=>{this.props.decrement({id:item.id})}}>-</button>
                                        {item.count}
                                        <button onClick={()=>{this.props.increment({id:item.id})}}>+</button>
                                    </td>
                                    <td><button>删除</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state)=>{
    console.log('state', state)
    return {
        cartList:state.cart1
    }
}

export default connect(mapStateToProps, {increment,decrement})(MyCartList)