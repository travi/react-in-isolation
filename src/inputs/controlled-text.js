import React from 'react';
import {func} from 'prop-types';

export default class ControlledInput extends React.Component {
  state = {value: ''};

  changeHandler = event => {
    const {onChange} = this.props;

    const updatedValue = event.target.value;

    this.setState({value: updatedValue});
    onChange(event, updatedValue);
  };

  render() {
    const {value} = this.state;

    return <input type="text" value={value} onChange={this.changeHandler} />;
  }
}

ControlledInput.displayName = 'ControlledInput';
ControlledInput.propTypes = {onChange: func};
