import * as React from 'react';
import '../App.css';

const Textinput = ({type, name}) => (
  <input
    type={type}
    ref={name}
    className="input"
  />
);

Textinput.propTypes = {
  type: React.PropTypes.string,
  name: React.PropTypes.string
}

Textinput.defaultProps = {
  type: 'text',
  name: 'name'
}


export default Textinput;
