import React from 'react';
import './App.css';
import ButtonsBoard from '../ButtonsBoard/ButtonsBoard';
import Display from '../Display/Display';
import calculate from '../../logic/calculate';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName){
    this.setState(calculate(this.state, buttonName));
  }

  render(){
    return (
      <div className="calculator-container">
        <Display value={this.state.next || this.state.total || "0"} />
        <ButtonsBoard onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;