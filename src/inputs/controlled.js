import React from 'react';

export default class ControlledInput extends React.Component {
  state = {value: ''};

  changeHandler = (event, updatedValue) => {
    this.setState({value: updatedValue});
  };

  render() {
    return <input type="text" value={this.state.value} onChange={this.changeHandler} />;
  }
}

ControlledInput.displayName = 'ControlledInput';
