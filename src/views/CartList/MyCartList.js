import React, { Component } from 'react'

export default class MyCartList extends Component {
    render() {
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
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>price</td>
                        <td>
                            <button>+</button>
                            count
                            <button>+</button>
                        </td>
                        <td>删除</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}
