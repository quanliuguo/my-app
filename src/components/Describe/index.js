import React, { Component } from 'react'

export default class Describe extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'全留果',
            hobby:[
                'eat',
                'f**k',
                'coding'
            ]
        }
    }

    render() {
        return (
            <div className='des'>
                <p>{JSON.stringify(this.state)}</p>
                <p className='des-content'>
                    {this.state.hobby[this.props.index1]}
                </p>
            </div>
        )
    }
}
