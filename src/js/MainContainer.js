import React, { Component } from 'react';
import '../css/MainContainer.css';
import Body from './Body.js';

class MainContainer extends Component {
  render() {
    return (
      <div className="MainContainer">
        <div className="MainFlexbox">
          <div className="Title">
            FFmpeg Reader
          </div>
          <Body />
        </div>
      </div>
    );
  }
}

export default MainContainer;
