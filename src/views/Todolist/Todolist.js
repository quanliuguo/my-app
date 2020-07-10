import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types'
export default class TodoList extends Component {
    static propTypes = {
        todos:PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            name:PropTypes.string.isRequired,
            isCompleted:PropTypes.bool.isRequired
        })).isRequired,
        changeTaskStatus:PropTypes.func
    }

    render() {
        console.log('todoListRender')
        return (
           <ul>
               {
                   this.props.todos.map((todo)=>{
                       return (
                        <TodoItem
                        {...todo}
                        key={todo.id}
                        changeTaskStatus={this.props.changeTaskStatus}
                        />
                       )
                   })
               }
           </ul>
        )
    }
}
