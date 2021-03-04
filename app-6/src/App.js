
import logo from './logo.svg';
import './App.css';
import MakeList from './Components/MakeList'
import React, {Component} from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      list: [],
      userInput: ''
    }
    this.listAdd = this.listAdd.bind(this);
  }

  handleInputChange(filter) {
    this.setState({ userInput: filter });
  }

  listAdd(){
    this.setState({
      list: [...this.state.list, this.state.userInput],
      userInput: ''
    })
  }

  render(){
    let list = this.state.list.map((elem, index) => {
      return <MakeList key={index} task={elem}/>
    })
    
    return(
      <div className='MakeList'>
        <h1>My to-do list:</h1>
        <input 
        placeHolder={'Enter New Task Here'}
        value={this.state.userInput}
        onChange={e => this.handleInputChange(e.target.value)}/>
        <button onClick={this.listAdd}>Add</button>
        <br/>
        {list}
      </div>
      
    )
  }
}



export default App;
