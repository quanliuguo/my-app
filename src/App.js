import React from 'react';  
import './App.css';
// import Game from './views/Game'
// import MyToDoList from './views/TodoList'
import Counter from './views/Counter'
import MyHoc from './views/HOC'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  render(){
    return (
      <div className="App">
        {/* <div dangerouslySetInnerHTML={{__html:this.state.article}}></div> */}
        {/* <Game/> */}
        {/* <br/> */}
        {/* <MyToDoList></MyToDoList> */}
        <Counter/>
        <MyHoc></MyHoc>
      </div>
    );
  }

}

export default App;
