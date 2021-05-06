import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email:'',
      spanName: '',
      spanEmail:'',
      errors:[],
    };
  }

  handleErrors(name, value) {
    this.setState(state => ({
      spanName:  name === 'name' && value.length > 40
      ? 'Nome só pode ter 40 caracteres.'
      : '',
      errors: [...state.errors, 'Email só pode ter 50 caracteres'],
    }));
      
    this.setState( state => ({
      spanEmail: name === 'email' && value.length > 50
      ? 'Email só pode ter 50 caracteres.'
      : '',
      errors: [...state.errors, 'Email só pode ter 50 caracteres'],
    }));
  }

  handleAdjusts(name, value) {
    if (name === 'name') {
      this.setState({
        [name]: value.toUpperCase(),
      });
    }
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
    this.handleAdjusts(name, value);
    this.handleErrors(name, value);
  }
  render() {
    return (
      <form className='form'>
        <h1 className='h1-form'>Formulário: </h1>
        <fieldset className='fs-form'>
          <Input
            name='name'
            value={this.state.name}
            handleChange={this.handleChange.bind(this)}
          >
            Nome:
          </Input>
          <span name='errors' style={{ color: 'red' }}>
            {this.state.errors}
          </span>

          <Input
            name='email'
            value={this.state.email}
            handleChange={this.handleChange.bind(this)}
          >
            Email:
          </Input>
          <span name='span-email' style={{ color: 'red' }}>
            {this.state.spanEmail}
          </span>
        </fieldset>
      </form>
    );
  }
}

Form.propTypes = {
  name: PropTypes.string,
};

export default Form;
