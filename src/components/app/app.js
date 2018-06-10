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
          </div>
        </div>
      </div>
    </div>;
  }
}
