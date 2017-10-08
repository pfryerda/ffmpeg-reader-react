import url from 'url';
// import {download} from 'download-file';
var download = require('./download.js');
// var download = require('download-file');

const DOWNLOAD_DIR = '$HOME/Downloads'

function encodeURL(urlString) {
  try {
    let parsed = url.parse(urlString);
    return parsed;
  } catch(error) {
    // In this case, we don't want to crash if there is an invalid URL
    // so just return the error rather than crashing
    console.error("URL invalid:" + urlString + "\n" + error);
    return error
  }
}

function isValidURL(urlObj) {
  try {
    console.log("isValidURL", urlObj.protocol);
    if (urlObj.protocol) {
      return true;
    }
  } catch(error) {
    // In this case, we don't care what the error is, so just return rather than crash
    return false;
  }
}

function downloadVideo(urlObj) {
  const fileName = url.parse(urlObj).pathname.split('/').pop();
  const urlStr = 'https://cors-anywhere.herokuapp.com/' + urlObj.href.toString();
  console.log("downloadVideo", urlStr, fileName);
  let thing = download(urlStr, {directory: DOWNLOAD_DIR}, (error) => {
    if (error) {
      throw error;
    } else {
      console.log("Success! File downloaded to " + DOWNLOAD_DIR + "/" + fileName);
    }
  })
};

export {encodeURL, isValidURL, downloadVideo};