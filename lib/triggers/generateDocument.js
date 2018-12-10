/**
 * Copyright 2018 Cloud Ecosystem e.V.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

"use strict";
const { messages } = require('elasticio-node');

exports.process = processTrigger;

/**
 * Executes the trigger's logic by sending a request to the Petstore API and emitting response to the platform.
 * The function returns a Promise sending a request and resolving the response as platform message.
 *
 * @param msg incoming messages which is empty for triggers
 * @param cfg object to retrieve triggers configuration values, such as apiKey and pet status
 * @returns promise resolving a message to be emitted to the platform
 */
function processTrigger(msg, cfg) {

  const documentObj = {
    "oihApplicationRecords":[
          {
            "recordUid":"12"
          }
        ],
        "name":"parent",
        "description":"reference",
        "baseType":"document",
        "parentUid":"456",
        "path":"/test/route",
        "policies":[""],
        "currentVersion":{
          "label":"1.0.1",
          "comment":"abc",
          "isLatestVersion":true,
          "isMajorVersion":true,
          "size":2097152,
          "mimeType":"image/png",
          "url":"http://example.com",
          "uid":"ef-sf3-f233",
          "type":"mail",
          "extension":"png",
          "properties":[
            {
                "type":"width",
                "value":"1920"
             }
          ],
          "subResource":[
            {
              "type":"rendition",
              "info":"small",
              "size":28283,
              "mimeType":"29099",
              "url":"http://test.com",
              "uid":"97531"
            }
          ]
        }
};

  return messages.newMessageWithBody(documentObj);
}
