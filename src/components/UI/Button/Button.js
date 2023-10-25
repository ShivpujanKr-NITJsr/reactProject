import React from 'react';

import './Button.css';

const Button = props => {
  let p=props.classname;
  if(p===''){
    p='button'
  }
  return (
    <button type={props.type} className={p} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
