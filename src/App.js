import React, { Component } from 'react';
//import Todo from './components/Todo.js';
import Todo from './components/Todo.js';
//import Textinput from './components/Textinput.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      allTodo:[]
    };

  //  this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    let text = this.refs.name.value;
    let id = Math.floor((Math.random()* 100000) + 1);
    this.setState({
      allTodo: this.state.allTodo.concat({id, text})
    });

    this.refs.name.value = '';

  }


  render() {
    let myTodo = this.state.allTodo.map((row) => {
      let {id, text} = row;
      return { id, text};
    });


    return (
      <div className="main">
        <h3>{`Student Unique Number Generator`} </h3>
        <form onSubmit={this.addTodo.bind(this)}>
          <input type='text' ref='name'
            className='input'
          />
          <button type="submit">{`Generate Numbers`}</button>
       </form>
       <section className="todoList">
           <div className="todoName">
             <h3>{`Student Name`}</h3>
           </div>
           <div className="action">
             <h3>{`Number`}</h3>
           </div>
       </section>
       {myTodo.map((newTodo)=> {
         return <Todo id={newTodo.id}  text={newTodo.text} key={newTodo.id}/>
       })}

      </div>
    )
  }
}


export default App;
