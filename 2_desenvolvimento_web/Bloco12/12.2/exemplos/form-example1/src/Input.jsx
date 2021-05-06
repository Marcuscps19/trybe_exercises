import React, { Component } from 'react';

class Input extends Component {
  render() {
      const { name, value, handleChange, type, error, handleError } = this.props;
      let errorMsg = undefined;
      if(type === 'text' && value.length >= 60) {
          errorMsg = 'Texto muito grande';
      }

    return (
        <label>
            Digite seu estado favorito:
      <input
        name= {name}
        type= {type}
        value={value}
        onChange={handleChange}
        error={handleError}
        
      ></input>
        <br />
      <span style={{color:"red"}}>{error ? errorMsg : ''}</span>
      </label>
    );
  }
}

export default Input;
