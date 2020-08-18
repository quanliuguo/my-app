import React, { Component } from 'react'
import {
    // Route,
    Link
} from 'react-router-dom'
// import ArticalDetail from './ArticalDetail'
export default class Artical extends Component {
    render() {
        return (
            <div>
                <Link to="/artical/1">文章一</Link>
                {/* <Link to="/artical/2">文章二</Link> */}
                {/* state 隐式传参 */}
                   <Link to={{
                       pathname: '/artical/2',
                       search: "?sort=name",
                       hash: "#the-hash",
                       state: { fromDashboard: true }
                    }}
                   >文章二</Link>
                {/* <div>
                    <Route component={ArticalDetail} path="/artical/:id"/>
                </div> */}
            </div>
        )
    }
}
