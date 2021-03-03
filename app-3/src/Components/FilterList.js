import React, {Component} from 'react';

// export default class FilterList extends Component {
//   constructor(){
//     super();
//     this.state = {
//       userInput: '',
//       list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
//     };
//   }
  
//  handleChange(filter){
//     this.setState({ userInput: filter });
//  }
    
//  render(){
//     let foodList = this.state.list
//     .filter((elem, index) => {
//       return elem.includes(this.state.list);
//     })
//     .map((elem, index) => {
//       return <h2 key={index}>{elem}</h2>
//     });
    
//     return (
//     <section>
//       <input onChange={(e) => this.handleChange(e.target.value)} type="text"></input>
//       {foodList}
//     </section>
//     )
//   }

 

  
  
//   // filterFoods(prop){
//   //   let list = this.state.list;
//   //   let userInput = this.state.userInput

//   //   for(let i = 0; i < list.length; i++){
//   //     if(list[i] == userInput)
//   //     list.splice(userInput[i], 1)
//   //   }

//     // this.setState({ filteredFoods: filteredFoods })

//   // }
// }



class App extends Component {
  constructor() {
    super();

    this.state = {
      filterString: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let foodsToDisplay = this.state.foods
      .filter((element, index) => {
        return element.includes(this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element}</h2>;
      });

    return (
      <div className="App">
        <input onChange={e => this.handleChange(e.target.value)} type="text" />
        {foodsToDisplay}
      </div>
    );
  }
}

export default App;