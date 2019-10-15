import React from 'react';

const PRIVILEGE = [
  {
    id: "admin",
    name: "Administrador"
  },
  {
    id: "user",
    name: "Usuario"
  }
]

export default class Formulario extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      name: "",
      description: "",
      privilege: "",
      result: {
        description: '',
        privilege: ''
      }
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput (event) {
    const { name, value } = event.target;
    this.setState({ 
      [name]: value
    });
  }

  handleSubmit (event) {
    event.preventDefault();

    if (this.state.name.trim().length == 0) {
      alert('Oye, se te ha olvidado escribir el nombre');
      return;
    } else if (this.state.name.trim().length < 3) {
      alert('Tu nombre es muy corto, ¿no?');
      return;
    }

    if (this.state.description.trim().length < 10) {
      alert('Necesito una descripción más extensa. Como mínimo de 10 caracteres, así que... ¡a escribir!');
      return;
    }

    const { description, privilege } = this.state;
    const privilegeName = PRIVILEGE.find(element => element.id === privilege).name;
    this.setState({
      result: {
        privilege: privilegeName,
        description
      }
    });
  }
  
  render() {
    const { description, privilege } = this.state.result;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Formulario de {this.state.name}</h1>
          <p>Nombre:</p>
          <input type="text" name="name" placeholder="Introduce tu nombre" onChange={this.handleInput} />
          <p>Descripción:</p>
          <textarea name="description" rows="10" cols="30" onChange={this.handleInput}></textarea>
          <p>Rol:</p>
          {
            PRIVILEGE.map(role => (
              <div>
                <input type="radio" name="privilege" value={role.id} onClick={this.handleInput}/> {role.name}
              </div>
            ))
          }
          <br />
          <input type="submit" value="Submit" />
        </form>
        
        <h2>{privilege}</h2>
        <p>{description}</p>
      </div>
    );
  }
}