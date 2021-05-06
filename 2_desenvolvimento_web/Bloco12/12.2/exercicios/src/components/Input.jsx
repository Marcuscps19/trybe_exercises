import React, {Component} from 'react';

class Input extends Component {
    render(){

        const {name, value, handleChange, children} = this.props;
        return(
            <div>
            <label className={name} htmlFor={name}>
            {children}   
            <input
              name={name}
              value={value}
              onChange={handleChange}
            ></input>
          </label>
          <span name='span' style={{ color: 'red' }}></span>
          </div>
        );
    }
}

export default Input;