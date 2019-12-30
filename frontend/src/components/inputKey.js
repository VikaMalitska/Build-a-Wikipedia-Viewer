import React, { Component } from 'react';



export class InputKey extends Component {
    
    constructor(){
        super();
        this.state = {
            value:"",
        } 
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    render(){
        const {pageHandler} = this.props;
        return(
            <form onSubmit={(event) => {
                pageHandler(this.state.value);
                event.preventDefault();
            }}>
                <label>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
          </form>
        )
    }
}