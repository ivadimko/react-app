import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    super();
    this.message = 'Hello React';
  }

  render() {
    return <div className={'page'}>
      <div className={'grid-container'}>
        <div className="grid-x grid-margin-x">
          <div className="cell">
            <h1>{this.message}</h1>
            <p>This is a simple react-app template</p>
          </div>
        </div>
      </div>
    </div>;
  }
}
