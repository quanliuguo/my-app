import React, { Component } from 'react'
import BackHome from '../../components/BackHome'


export default class ArticalDetail extends Component {
    render() {
        console.log('ArticalDetail--props', this.props)
        return (
            <div>
                ArticalDetail{this.props.match.params.id}
                <BackHome></BackHome>
            </div>
        )
    }
}
