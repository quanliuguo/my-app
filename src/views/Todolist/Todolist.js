import React, { Component } from 'react'

export default class Todolist extends Component {
    render() {
        return (
            <div>
                <h1>TO DO LIST</h1>
                <div className="btns">
                    <button>All</button>
                    <button>Finished</button>
                    <button>unFinished</button>
                </div>
                <div className="list-wrap">
                    
                </div>
            </div>
        )
    }
}
