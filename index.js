'use strict';

// Setup work

// Cloud functions declarations go here

process.env.DEBUG = '*';

const fs = require('fs');
const child_process = require('child_process');
const Buffer = require('safe-buffer').Buffer;

const config = require('./config.json');

const pubsub = require('@google-cloud/pubsub')();
const storage = require('@google-cloud/storage')();
const vision = require('@google-cloud/vision')();
const translate = require('@google-cloud/translate')();

const aog = require('actions-on-google');
const DialogflowApp = aog.DialogflowApp;


// Publishes result to a given topic and returns a Promise
function publishResult(){}
// Detects the text in an image using Google Vision API
function detectText(){}
// Sends some function call to Twilio or similar service
function uploadImage(data) {return data;}
//Captures the image from User camera.
const fs = require('fs');
const child_process = require('child_process');
const Buffer = require('safe-buffer').Buffer;
/**
 * Capture the image from the user computer's camera.
 */
function captureImage() {
  return new Promise((res, rej) => {
    const file = `/tmp/google-actions-reader-${Date.now()}.png`;
    try {
      child_process.execSync(`imagesnap -w 1 ${file}`);
      const bitmap = fs.readFileSync(file);
      res({
        base64: new Buffer(bitmap).toString('base64'),
        file
      });
    } catch (err) { rej(err); }
  });
}
//Reads DialogFlow intent that will trigger image capture/upload
function readIntent(){}