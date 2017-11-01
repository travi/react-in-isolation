import React from 'react';
import {func} from 'prop-types';

export default class ControlledInput extends React.Component {
  state = {value: ''};

  changeHandler = event => {
    const updatedValue = event.target.value;

    this.setState({value: updatedValue});
    this.props.onChange(event, updatedValue);
  };

  render() {
    return <input type="text" value={this.state.value} onChange={this.changeHandler} />;
  }
}

ControlledInput.displayName = 'ControlledInput';
ControlledInput.propTypes = {onChange: func};
