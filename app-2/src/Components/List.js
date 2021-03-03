import React, {Component} from 'react';

export default class List extends Component {
  render(){
    let foodList = this.state.list.map((elem,index) => {
      return <h2 >{elem}</h2>
    })
    return <div>{foodList}</div>
  }

  constructor(){
    super();
    this.state = {
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
}