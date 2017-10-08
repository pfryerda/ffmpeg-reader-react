import React, { Component } from 'react';
import '../css/Body.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import {encodeURL, isValidURL, downloadVideo} from './downloadURL.js';

const URL_HINT_TEXT = "Enter a video URL";
const DOWNLOAD_BUTTON_LABEL = "DOWNLOAD"

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      downloadButtonDisabled: true
    }

    this.downloadButtonClicked = this.downloadButtonClicked.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  urlTextFieldValueChanged(value) {
    console.log(value === "")
    this.setState({
      downloadButtonDisabled: value === "",
      value
    });
  }

  handleKeyPress(event) {
    const {value} = this.state;
    if(event.key === 'Enter' && value){
      this.downloadButtonClicked();
    }
  }

  downloadButtonClicked() {
    const {downloadButtonDisabled, value} = this.state;
    if (!downloadButtonDisabled) {
      console.log(value, encodeURL(value));
      let url = encodeURL(value);
      
      if (isValidURL(url)) {
        downloadVideo(url);
      }
    }
  }

  render() {
    const {downloadButtonDisabled} = this.state;

    return(
      <div className="Body">
        <div className="ContentContainer">
          <div className="urlContainer">
            URL:
            <TextField className="urlTextField"
                       hintText={URL_HINT_TEXT}
                       style={{width:"26rem"}}
                       onChange={(event, value) => this.urlTextFieldValueChanged(value)}
                       onKeyPress={(event) => this.handleKeyPress(event)} />
          </div>

          <div className="downloadButtonContainer">
            <RaisedButton primary label={DOWNLOAD_BUTTON_LABEL}
                          disabled={downloadButtonDisabled}
                          onClick={this.downloadButtonClicked} />
          </div>
        </div>
      </div>
    )
  }
}

export default Body;
