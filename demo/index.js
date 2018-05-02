import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import ConnectElements from '../src';
import './styles.css';

const Input = props => (
  <label htmlFor={props.id}>
    {props.id}
    <input {...props} />
  </label>
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
};

class Demo extends Component {
  state = {
    connections: [
      { from: '.element1', to: '.element4' },
      { from: '.element2', to: '.element4' },
      { from: '.element3', to: '.element4' },
      { from: '.element5', to: '.element4' },
      { from: '.element6', to: '.element4' },
      { from: '.element7', to: '.element4' },
    ],
    color: '#666666',
    overlay: 0,
    strokeWidth: 5,
  };

  handleNumberInputChange = evt => {
    const { id, value } = evt.target;

    this.setState({ [id]: Number(value) });
  };

  handleStringInputChange = evt => {
    const { id, value } = evt.target;

    this.setState({ [id]: value });
  };

  render() {
    const { color, connections, overlay, strokeWidth } = this.state;

    return (
      <div className="container">
        <header>
          <a href="https://github.com/emersonlaurentino/react-connect-elements">
            <h1>React Connect Elements</h1>
          </a>
        </header>
        <div className="inputs">
          <Input
            id="color"
            onChange={this.handleStringInputChange}
            type="color"
            value={color}
          />
          <Input
            id="overlay"
            onChange={this.handleNumberInputChange}
            type="number"
            value={overlay}
          />
          <Input
            id="strokeWidth"
            onChange={this.handleNumberInputChange}
            type="number"
            value={strokeWidth}
          />
        </div>
        <div className="elements">
          <div className="elements-row">
            <div className="element element1" />
            <div className="element element2" />
            <div className="element element3" />
          </div>
          <div className="elements-row">
            <div className="element element4" />
          </div>
          <div className="elements-row">
            <div className="element element5" />
            <div className="element element6" />
            <div className="element element7" />
          </div>
        </div>
        <footer>
          <span>
            by{' '}
            <a href="https://github.com/emersonlaurentino">
              @emersonlaurentino
            </a>
          </span>
        </footer>
        <ConnectElements
          selector=".elements"
          color={color}
          elements={connections}
          overlay={overlay}
          strokeWidth={strokeWidth}
        />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#root'));
