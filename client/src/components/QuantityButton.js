import React from "react";
import {Button, ButtonGroup} from '@mui/material';

class QuantityButton extends React.Component {
  state = { counter: 0 };

  handleIncrement = () => {
    this.setState(state => ({ counter: state.counter + 1 }));
  };

  handleDecrement = () => {
    this.setState(state => ({ counter: state.counter - 1 }));
  };
  render() {
    const displayCounter = this.state.counter >= 0;


    return (
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={this.handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{this.state.counter}</Button>}
        <Button onClick={this.handleDecrement}>-</Button>
      </ButtonGroup>
    );
  }
}

export default QuantityButton;