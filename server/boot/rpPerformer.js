'use strict';

function RpPerformer() {

}

async function rpexecuteAsync(modelMockaroTemplateUri) {
  var rp = require("request-promise");
  var options = {
    method: 'GET',
    uri: modelMockaroTemplateUri,
    // transform: this.autoParse(body),
    headers: {
      'User-Agent': 'Request-Promise',
    },
    body: {},
    json: true, // Automatically stringifies the body to JSON
  };

  await rp(options)
    .then(function(response) {
      console.log("%s", response);
      //return JSON.parse(response);
    })
    .catch(function(err) {
      console.error("%s", err.message);
      console.log("%j", err.response.statusCode);
    })
    .finally(function(response) {
      //return JSON.parse(response);
    }
    );
}

RpPerformer.prototype.rpexecute = async function(modelMockaroTemplateUri) {
var Promise = require('bluebird');
let info = await rpexecuteAsync(modelMockaroTemplateUri);
console.log(info);
return Promise.resolve(info);
}

RpPerformer.prototype.getContent = async function(url) {
  // return new pending promises :-()
  var rp = require('request-promise');
  await rp(url)
      .then((html) => console.log(html)) // Process html...
      .catch((err) => console.error(err)); // Crawling failed...
}

RpPerformer.prototype.getContentClassic = async function(url) {
  // return new pending promises
  return new Promise((resolve, reject) => {
    // select http or https module, depending on reqested url
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
         reject(new Error('Failed to load page, status code: ' + response.statusCode));
       }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
    })
}

module.exports = RpPerformer;
