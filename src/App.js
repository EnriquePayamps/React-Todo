import React, { Component } from 'react';
import './App.css';

import FormTareas from './Componentes/FormTareas'
import {todos} from './todos.json';

class App extends Component{
  constructor(){
    super();
    this.state = {
      todos
    };
    this.handleAddTodo= this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos,todo]//modificar el estado con la nueva tarea
    })
  }
    removeTodo(index){
     if(window.confirm('Estas seguro que quieres eliminar')){
      this.setState({
        todos: this.state.todos.filter((e, i) => {
          return i !== index
        })
     })
    }
    }
 
  
  render(){
    const todos = this.state.todos.map((todo, i) =>{
      return(
        
        <div className="col-4 col-md-4" key={i}>
          <div class="card mt-2" >
            <div class="card-header">
              <h3>{todo.titulo}</h3>
              <span className="badge rounded-pill bg-primary">
                {todo.prioridad}
              </span>
              </div>
            <div class="card-body">
            <p>
              {todo.descripcion}</p>
              <p>{todo.responsable}</p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" 
              onClick={this.removeTodo.bind(this, i)}>
                Eliminar 
              </button>
            </div>
          </div>
        </div>

      )

    }
    )
    return (
          <div className="App">
            
            <nav className="navbar navbar-dark bg-dark">
                  <a href className="text-light text-decoration-none  ps-2 ">
                    Tareas
                     
                     <span className="badge rounded-pill text-dark bg-light ms-2">
                       {this.state.todos.length}
                     </span>
                     
                 </a>
         </nav>
          <div className="container">
            <div className="row ">
              <div className="col-md-3">
              <FormTareas onAddTodo={this.handleAddTodo}/>
              </div>
              <div className="col-md-9">
                  <div className="row mt-4">
                  {todos}
                  </div>
          </div>
          </div>
          </div>
          
          
          </div>
        );
      }
  }
  

export default App;
