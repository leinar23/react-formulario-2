import React, { Component } from 'react';
import { render } from 'react-dom';
import Formulario from './Formulario'
import './style.css';

class App extends Component {
  render() {
    return (
      <div>
        <Formulario />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
