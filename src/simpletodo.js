import React, { Component } from 'react';
import './simpletodo.css';

const DisplayTodo = (state) => {
    return (
       <div>
          {state.itemKey}. {state.todoItems}
       </div>
    );
};


class SimpleTodo extends Component {
  constructor(props) {
  	  super(props);
  	  this.state = {
  	  	  todoAddItem: "",
  	  	  todoItems: []
  	  };
  	  this.addTodoItem = this.addTodoItem.bind(this)
  };
  
  addTodoItem(e) {
     e.preventDefault()
  	 const newTodoItems = this.state.todoItems.slice();
  	 newTodoItems.push(this.state.todoAddItem)
  	 this.setState({todoAddItem: "", todoItems: newTodoItems})
  }
  
  render() {
  	 const displayTodoItem = this.state.todoItems.map((todoItem, index) =>(
       <DisplayTodo
          itemKey={index+1}
          todoItems={todoItem}
       />
    ));
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.addTodoItem}>
           <input
              type="text"
              name="todoAddItem"
              value={this.state.todoAddItem}
              onChange={(e) => this.setState({[e.target.name]: e.target.value})}
           />
           <button type="submit">
              Add Items
           </button>
        </form>
        <ol>
           {displayTodoItem}
        </ol>
     
      </div>
    );
  }
}

export default SimpleTodo;
