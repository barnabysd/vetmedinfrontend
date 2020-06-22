"use strict";

// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');

require('dotenv').config(); // const result = dotenv.config('../../.env')
// if (result.error) {
//   throw result.error
// }
// console.log('nnnn',result.parsed)

/** THIS IS YOUR SERVERLESS FUNCTION */


exports.handler = function (event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  const {
    API_URL,
    API_CLIENT_ID,
    API_KEY
  } = process.env; // THIS FUNCTION FORMATS AND SENDS YOUR RESPONSE BACK TO YOUR FRONT-END

  const send = body => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(body)
    });
  }; // CONFIGURE YOUR AIRTABLE BASE CONNECTION


  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  var base = Airtable.base(API_CLIENT_ID);
  const data = []; ////////////

  base('People').create([{
    "fields": {
      "Current Company": ["Ogilvy & Mather"],
      "Name": "Judy Robin",
      "Location": "\"New York, NY\"",
      "Tags": ["Work"],
      "My Notes": "Last time we talked, Judy mentioned she was planning on changing careers.",
      "Pic": [{
        "url": "https://dl.airtable.com/sJhYf2MkTlKBdNen06ym_judy.png"
      }],
      "See during upcoming trip?": "New York Personal Trip",
      "Email": "judyrobin@example.com",
      "Phone Number": "(212) 555-1234"
    }
  }, {
    "fields": {
      "Current Company": ["Self-employed"],
      "Name": "Keith Faletti",
      "Location": "\"Houston, TX\"",
      "Tags": ["Personal"],
      "Overdue for catch up": true,
      "Pic": [{
        "url": "https://dl.airtable.com/s3Hx9RBSnSs3y0jMMPoE_keith.png"
      }],
      "Email": "kfaletti@example.com",
      "Phone Number": "(281) 555-1234"
    }
  }], function (err, records) {
    if (err) {
      console.error(err);
      return;
    }

    records.forEach(function (record) {
      console.log(record.getId());
    });
  }); /////

  send(data);
};