import React from 'react';
// @import "~antd/lib/style/themes/default.less";
import './App.less';
// import Game from './views/Game'
// import MyToDoList from './views/TodoList'
// import Counter from './views/Counter'
// import MyHoc from './views/HOC'
// import CartList from './views/CartList'
// import {BlogList} from './views'
import View from './views'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        {/* <div dangerouslySetInnerHTML={{__html:this.state.article}}></div> */}
        {/* <Game/> */}
        {/* <br/> */}
        {/* <MyToDoList></MyToDoList> */}
        {/* <Counter/> */}
        {/* <MyHoc></MyHoc> */}
        {/* <CartList></CartList> */}
        {/* <BlogList></BlogList> */}
        <View></View>
      </div>
    );
  }

}

export default App;
