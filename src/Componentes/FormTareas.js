import React, { Component } from "react";


class FromTareas extends Component{
    constructor () {
        super();
        this.state = {
          titulo: '',
          responsable: '',
          descripcion: '',
          prioridad: 'baja'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
// modificar el estado de las tareas
    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]:value
        })
      
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }
    
    render(){
        
      return (
            
        <div className="card mt-4">
        <form  className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="titulo"
              className="form-control"
              onChange={this.handleInput}
              placeholder="Titulo"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsable"
              className="form-control"
              onChange={this.handleInput}

              placeholder="responsable"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="descripcion"
              className="form-control"
              placeholder="descripcion"
              onChange={this.handleInput}

              />
          </div>
          <div className="form-group">
            <select
                name="prioridad"
                className="form-control"
                onChange={this.handleInput}

              >
              <option>bajo</option>
              <option>medio</option>
              <option>alto</option>
            </select>
            
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
          );
        }
    }
    
  
  export default FromTareas;