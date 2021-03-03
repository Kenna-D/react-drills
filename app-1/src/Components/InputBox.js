import React, {Component} from 'react';

class InputBox extends Component {
  render(){
    return(
      <section className='container'>
        <input onChange={ (e) => this.handlesChange(e.target.value) } ></input>
        <br></br>
        <span className='outputBox'>{this.state.userInput}</span>
      </section>
    )
  }

  constructor(){
    super();
    this.state = {
      userInput: '',
      output: []
    }
  }

  handlesChange(val){
    this.setState({ userInput: val })
  }

 
}

export default InputBox