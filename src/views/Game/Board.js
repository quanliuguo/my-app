import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
    
    renderSquare(i){
        return (
        <Square
            value={this.props.squares[i]}
            onClick={()=>{this.props.onClick(i)}}
        />
        )
    }
    render() {
        return (
            <div style={{paddingTop:'10px'}}>
                {/* <div className='title'>开始游戏</div> */}
                {/* <p>{status}</p> */}
                <div className="board" style={{width:'90px',height:'90px',marginLeft:'20px'}}>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }
}


export default Board;