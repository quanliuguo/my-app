import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import{ Provider } from 'react-redux'
import store from './store'
// import { BrowserRouter as Router, Route } from 'react-router-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import zhCN from 'antd/es/locale/zh_CN';
import { ConfigProvider } from 'antd';
import {mainRouter} from '@/routes'

ReactDOM.render(
  // 一般就直接把Provider这个内置组件放在应用程序的最顶层,这个组件必须接受一个store属性,就是creactStore()创建出来的store  这样所有的组件都会通过connect函数做连接
<Provider store = {store}>
  {/* <React.StrictMode> */}
    <ConfigProvider locale={zhCN}>
      <Router>
      <Switch>
        <Route  exact path="/" render={(routePorps)=>{
          return <App/>
        }}>
        </Route>
        {
          mainRouter.map((routeItem, index) => {
            return <Route key={index} path= {routeItem.path} component={routeItem.component} exact={!!routeItem.exact}></Route>
          })
        }
        {/* <Redirect to="/"></Redirect> */}
        <Redirect to="/404"></Redirect>
      </Switch>
      </Router>
    </ConfigProvider>
  {/* </React.StrictMode> */}
</Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
