import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <div className="grid">
            <div>hello</div>
            <div>hello</div>
            <div>hello</div>
            <div className="grid__skew-light-one"></div>
            <div className="grid__skew-light-two"></div>
            <div className="grid__skew-light-three-box"></div>
        </div>
    );
  }
}
