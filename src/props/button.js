import React from 'react';
import {string, bool, func} from 'prop-types';

export default function Button({label, disabled, onClick}) {
  return (
    <button disabled={disabled} style={{cursor: disabled ? 'not-allowed' : 'pointer'}} onClick={onClick} type="button">
      {label}
    </button>
  );
}

Button.displayName = 'Button';
Button.propTypes = {
  label: string,
  disabled: bool,
  onClick: func
};
