// export  BlogList} from './BlogList'
import  Home from './Home'
import  Artical from './Artical'
import  Users from './Users'
import  NotFoundPage from './NotFoundPage'
import  AntdDemo from './AntdDemo'
import  ArticalDetail from './Artical/ArticalDetail'
import { Route, NavLink as Link, Redirect, Switch } from 'react-router-dom'
import React, { Component } from 'react'

export default class View extends Component {
    constructor(props) {
        super()
        this.state={
            isLogin: false
        }
    }

    showLocation = (location) => {
        console.log(location,'location')
        return {
            ...location,
            pathname:'/home'
        }
    }

    // showLocation2 = (location) => {
    //     console.log(location,'location', 111)
    //     return {
    //         ...location,
    //         pathname:'/artical'
    //     }
    // }

    // homeLinkRender = (props) =>{
    //     console.log('homeLinkRender.., link的render属性必须是一个方法,参数props是location对象')
    //     return(
    //         <div>这是home路由的render出来的div</div>
    //     )
    // }

    render() {
        return (
            <div>
                <ul>
                    <li><Link to={this.showLocation}>首页</Link></li>
                    <li><Link to="/artical">文章</Link></li>
                    {/* <li><Link to={this.showLocation2}>文章</Link></li> */}
                    <li><Link to="/users">用户</Link></li>
                    <li><Link to="/antdDemo">示例</Link></li>
                </ul>
                <div>
                    {/* 知识点:
                        1.switch包裹的路由匹配规则
                        2.exact 属性
                        3. 利用render函数路由传参
                        4. 路由传参方式 
                        5. 利用state隐式传参  (应用于埋点)
                    */}
                   <Switch>
                    {/* <Route path="/home" component={Home} render={this.homeLinkRender}/>  */}
                    <Route component={Home} path="/home"/>
                    <Route component={Artical}  path="/artical" exact/>
                    <Route component={Users}  path="/users"/> 
                    <Route component={AntdDemo}  path="/antdDemo"/> 
                    {/* <Route  path="/users" render ={(routeProps) => {
                        console.log('usersRender', routeProps)
                        return this.state.isLogin? <Users {...routeProps}/> : <div>请登录</div>
                    }}/> */}
                    <Route component={ArticalDetail}  path="/artical/:id"/> 
                    <Route component={NotFoundPage}  path="/404"/> 
                    <Redirect to="/home" from="/" exact></Redirect>
                    <Redirect to="/404"></Redirect>
                    {/* 要放到最后一个 */}
                   </Switch>
                </div>
            </div>
        )
    }
}
