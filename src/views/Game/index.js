import React, { Component } from 'react';
import Board from './Board'

class Game extends Component {
    constructor(props){
        super(props)
        this.state={
            history:[{
                squares:Array(9).fill(null)
            }],
            isXnext:true,
            stepNumber:0,

        }
    }

    handleClick(i){
        const history = this.state.history.slice(0, this.state.stepNumber+1);
        const current = history[history.length - 1];
        const squares = current.squares.slice()
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
        squares[i]= this.state.isXnext?'X':'O'
        // const isXnext=!this.state.isXnext
        this.setState({
            history:history.concat([{
                squares
            }]),
            isXnext: !this.state.isXnext,
            stepNumber: history.length
        })
    }

    jumpTo(step){
        this.setState({
            stepNumber:step,
            isXnext: (step % 2) === 0
        })
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares)
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
        } else {
          status = 'Next player: ' + (this.state.isXnext ? 'X' : 'O');
        }

        const moves= history.map((step,move)=>{
            const desc= move? 'Go to move  #'+ move : 'Go to game start'
            return(
                <li>
                    <button onClick={()=>{this.jumpTo(move)}}>{desc}</button>
                </li>
            )
        })
        return (
            <div>
                <Board 
                    squares={current.squares}
                    onClick={i=>{this.handleClick(i)}}
                />
                <div className="gameInfo">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
export default Game;