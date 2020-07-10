import React, { Component , createRef} from 'react'
import propTypes from 'prop-types'
export default class TodoInput extends Component {
    constructor(){
        super()
        this.state={
            inputValue:''
        }
        this.inputDom= createRef()
    }
    /* 类组件的写法 */
    static propTypes={
        btnText:propTypes.string,

    }
    /* 类组件的写法 */
    static defaultProps={
        btnText:'添加Todo'
    }
    handleChange=(e)=>{
        this.setState({
            inputValue:e.currentTarget.value
        })
    }

    handleInputKeyup=(e)=>{
        if(e.keyCode===13){
            this.handleButtonClick()
        }
    }

    handleButtonClick=(e)=>{
        this.inputDom.current.focus()
        if(!this.state.inputValue || this.state.inputValue === '') return
        console.log('input', this.inputDom.current)
        const name = this.state.inputValue
        console.log('name->', name)
        this.props.addTask(name)
        this.setState({inputValue:''})
        
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputDom} value={this.state.inputValue} onChange={this.handleChange} onKeyUp={this.handleInputKeyup}></input>
                <button type='button' style={{marginLeft:'20px'}} onClick={this.handleButtonClick}>{this.props.btnText} </button>
            </div>
        )
    }
}
