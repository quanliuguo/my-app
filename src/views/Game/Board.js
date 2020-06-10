import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
    constructor(props){
        super(props)
        this.state={
            squares:new Array(9).fill(null)
        }
    }
    handleClick(i){
        const squares = this.state.squares.slice()
        squares[i]='X'
        this.setState({squares})
    }
    renderSquare(i){
        return <Square
                    value={this.state.squares[i]}
                    onClick={()=>{this.handleClick(i)}}
                />
    }
    render() {
        return (
            <div>
                <div className='title'>开始游戏</div>
                <div className="board" style={{width:'90px',marginLeft:'20px'}}>
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