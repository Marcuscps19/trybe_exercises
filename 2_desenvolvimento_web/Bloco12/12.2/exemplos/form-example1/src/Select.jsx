import React, { Component } from 'react';

class Select extends Component {
  render() {
    const { value, handleChange } = this.props;
    return (
      <select
        name='select'
        onChange={handleChange}
        value={value}
      >
        <option value='first'></option>
        <option value='cps'>Campinas</option>
        <option value='sp'>São Paulo</option>
        <option value='bh'>Belo Horizonte</option>
      </select>
    );
  }
}

export default Select;