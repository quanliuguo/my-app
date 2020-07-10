
import React, { Component } from 'react';

class Square extends Component{
    render(){
        return (
            <button
                className='square'
                style={{width:"30px",height:"30px",margin:0,padding:0,border:'1px solid #000',marginLeft:'-1px',marginTop:'-1px',lineHeight:'30px',float:'left',outline:'none'}}
                onClick={this.props.onClick}
            >
             {this.props.value}
           </button>
        )
    } 
}

export default Square