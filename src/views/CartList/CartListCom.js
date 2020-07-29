import React, { Component } from 'react'
import { connect } from 'react-redux'
// 导入actionCreators
import { increment, decrement } from '../../actions/cart.js'

const mapState = state =>{
    return {
        cartList:state.cart
    }
}
// @connect(mapState, { increment, decrement })

class CartListCom extends Component {
    constructor(){
        super()
        this.state={
            cartList:[]
        }
    }

    getState=()=>{
        this.setState({
            cartList: this.props.cartList
        })
    }

    componentDidMount(){
        console.log(this.props, 222)
        this.setState((prev,props)=>({
            cartList:this.props.cartList
        }), ()=>{
        })

        // this.props.store.subscribe(this.getState)
    }

    render() {
        console.log('this.props', this.props)
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>商品名称</th>
                        <th>价格</th>
                        <th>数量</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <td>1</td>
                        <td>iphone12</td>
                        <td>9000</td>
                        <td><button>-</button>1<button>+</button></td>
                        <td>删除</td>
                    </tr> */}

                    {
                        this.state.cartList.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        <button onClick={()=>{ this.props.decrement(item.id)}}>-</button>
                                        {item.amount}
                                        <button onClick={this.props.increment.bind(this, item.id)}>+</button>
                                    </td>
                                    <td>删除</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

// const mapDispatchToProps=dispatch=>({
//     add:(id)=>dispatch(increment(id)),
//     minus:(id)=>dispatch(decrement(id))
// })



// connect方法有四个参数，常用的就是前两个， 
/* 
    第一个参数是mapStateToProps,作用就是从store里面把state注入到当前组件的props上
    第二个参数可以是mapDispatchToProps, 这个的主要作用就是把 actionCreators注入到当前组件的props上
*/
export default connect(mapState, { increment, decrement })
(CartListCom)

