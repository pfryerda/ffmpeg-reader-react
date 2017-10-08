import React, { Component } from 'react';
import MainContainer from './MainContainer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <MainContainer />
      </MuiThemeProvider>
    );
  }
}

export default App;
