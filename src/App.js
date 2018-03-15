import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Singletodo from "./Singletodo";

class App extends Component {
	
	constructor(){
		super();
		this.state={
			todos: [],
			currentVal: ""
		};
	}
	
	onChangeFunction = (e) => {
		this.setState({currentVal: e.target.value});
	}
	
	onBtnClickFunction = () => {
		var todosCopy = this.state.todos.slice();
		todosCopy.push(this.state.currentVal);
		this.setState({todos: todosCopy, currentVal: ""});
	}
	
	deleteFunction = (i) => {
		var todosCopy = this.state.todos.slice();
		todosCopy.splice(i,1);
		this.setState({todos: todosCopy});
	}
	
	render(){
		var bulletedTodos = this.state.todos.map((e, i) => {
			return (
				<Singletodo todo={e} del={() => this.deleteFunction(i)}/>
			);
		});
		return(
			<div>
				<input type="text" placeholder="Add a new todo here!" value={this.state.currentVal} onChange={this.onChangeFunction}/>
				<button onClick={this.onBtnClickFunction}>Add!</button>
				<br/>
				<ul>{bulletedTodos}</ul>
			</div>
		
		);
	}

}

export default App;

/*

  constructor(){
	  super();
	  this.state={
		  count : 0
	  };
  }
  increment = () => {
	  this.setState({count : this.state.count + 1});
  }
  render(){
	  return (
		<div>
			<button onClick={this.increment}>Increment!</button>
			{this.state.count}
		</div>
	  );
  }
*/