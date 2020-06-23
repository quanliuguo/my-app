
import React from 'react'

function Square(props) {
    return (
        <button
            className='square'
            style={{width:"30px",height:"30px",margin:0,padding:0,border:'1px solid #000',marginLeft:'-1px',marginTop:'-1px',lineHeight:'30px',float:'left',outline:'none'}}
            onClick={props.onClick}
        >
         {props.value}
       </button>
    )
}

export default Square