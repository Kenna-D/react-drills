import React, {Component} from 'react';

class MakeList extends Component {
  render(){
    return(
      <div>{this.props.task}</div>
    )
  }
}

export default MakeList;