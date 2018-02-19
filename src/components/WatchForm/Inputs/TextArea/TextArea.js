import React from 'react';
import classes from './TextArea.css';

const TextArea = (props) => (
  <div className={classes.TextArea}>
    <label>{props.label}</label>
    <textarea 
      required={props.input.controls.required}
      name={props.input.name}
      onChange={(event) => props.onChange(props.input.name, event.target.value)}
      value={props.input.value}
      className={classes.TextInput}
    />
  </div>
)

export default TextArea;