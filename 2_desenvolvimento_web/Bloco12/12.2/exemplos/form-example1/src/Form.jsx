import React, { Component, createRef } from 'react';
import Input from './Input';
import Select from './Select';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      select: '',
      checkBox: '',
      textArea: '',
      input: '',
      errors: false,
    };

    this.handleChange = this.handleChange.bind(this);

    this.fileInput = createRef();
  }

  handleValidation(){
    let formIsValid = true;

    if(this.state.input.length > 10){
      formIsValid = false;
      this.setState({errors: true});
    }
    
    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleValidation() ? alert('Formulário enviado.') : alert(`Tamanho do texto muito grande`);
  }

  validateLength() {
    const { input } = this.state;
    this.setState(
      {
        formularioComErros: input.length > 10,
      },
      alert('Texto muito grande'),
    );
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <Select
          handleChange={this.handleChange}
          value={this.state.select}
        ></Select>

        <Input
          name='input'
          type='text'
          handleChange={this.handleChange}
          value={this.state.input}
        ></Input>
        <Input
          name='checkBox'
          type='checkbox'
          value={this.state.checkBox}
          handleChange={this.handleChange}
        ></Input>
        <input name='fileInput' type='file' ref={this.fileInput}></input>
        <textarea
          name='textArea'
          value={this.state.textArea}
          onChange={this.handleChange}
        ></textarea>
        <button type='submit'>Enviar</button>
      </form>
    );
  }
}

export default Form;
