import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList.js'

import Like from '../Like/Like'
import React, { Fragment } from 'react';

class MyTodoList extends React.Component {
    constructor(){
      super()
      this.state={
        desc:'今日事，今日毕',
        btnText:'ADD',
        article:'<div class=article>用<i>dangerouslySetInnerHTML={{__html:this.state.article}}</i>创建标签</div>',
        todos:[
          {
              id:0,
              name:'上班',
              isCompleted:false,
          },{
              id:1,
              name:'做饭',
              isCompleted:false,
          }
        ]
      
      }
    }
  
    handleChangeTaskStatus=(id)=>{
      const todos= this.state.todos.slice()
      todos.forEach(todo=>{
        if(todo.id===id){
          todo.isCompleted= !todo.isCompleted
        }
      })
      this.setState({
        todos
      })
    }
  
    addTask=(name)=>{
      console.log('addTask', name, this)
      const task={
        id:this.state.todos.length,
        name:name,
        isCompleted:false
      }
      const todos= this.state.todos.slice()
      todos.push(task)
      this.setState({
        todos
      })
    }
  
    render(){
      return (
        // <div className="App">
        <Fragment>
          {/* <div dangerouslySetInnerHTML={{__html:this.state.article}}></div> */}
          {/* <Game/> */}
          {/* <br/> */}
          <TodoHeader desc={this.state.desc}>代办事项列表</TodoHeader>
          <TodoInput btnText={this.state.btnText} addTask={this.addTask}/>
          <TodoList todos={this.state.todos} changeTaskStatus={this.handleChangeTaskStatus}/>
          <Like></Like>
        </Fragment>
        // </div>
      );
    }
  
  }
  
  export default MyTodoList;

// export {
//     TodoHeader,
//     TodoInput,
//     TodoList
// }
// export {default as TodoHeader} from './TodoHeader'
// export {default as TodoInput} from './TodoInput'
// export {default as TodoList} from './TodoList'