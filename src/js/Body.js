import React, { Component } from 'react';
import '../css/Body.css';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import 'whatwg-fetch'

const URL_HINT_TEXT = "Enter a video URL";
const DOWNLOAD_BUTTON_LABEL = "DOWNLOAD"

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlText: "",
      value: "",
      downloadButtonDisabled: true
    }

    this.downloadButtonClicked = this.downloadButtonClicked.bind(this);
  }

  urlTextFieldValueChanged(value) {
    console.log(value === "")
    this.setState({
      downloadButtonDisabled : value === "",
      value
    });
  }

  downloadButtonClicked() {
    const {downloadButtonDisabled, value} = this.state;
    if (!downloadButtonDisabled) {
      console.log(value)

      fetch('/download')
        .then(function(response) {
          console.log("Response", response, response.text);
          return response;
        });
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
                       onChange={(event, value) => this.urlTextFieldValueChanged(value) } />
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
