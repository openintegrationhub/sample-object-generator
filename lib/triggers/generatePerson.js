/**
 * Copyright 2018 Wice GmbH

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
const request = require('request-promise');
const { messages } = require('elasticio-node');

// const API_BASE_URI = 'https://petstore.elastic.io/v2';

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

  const person = {
    "title": "Prof.",
    "salutation": "Mr.",
    "firstName": "John",
    "middleName": "Anthony",
    "lastName": "Doe",
    "gender": "male",
    "birthday": "Wed, 14 Jun 1999 07:00:00 GMT",
    "notes": "Private notes",
    "displayName": "johndoe",
    "language": "english",
    "nickname": "johny",
    "jobTitle": "Sales manager",
    "photo": "http://example.org/photo.jpg",
    "anniversary": "14 Jun",
    "addresses": [{
        "street": "Hohestr",
        "streetNumber": "3",
        "unit": "a",
        "zipCode": "50667",
        "city": "Cologne",
        "district": "Alstadt-Sued",
        "region": "NRW",
        "country": "Germany",
        "primaryContact": "Hermann Schmitz",
        "description": "primary"
      },
      {
        "street": "Rudolfplatz",
        "streetNumber": "3",
        "unit": "a",
        "zipCode": "50667",
        "city": "Cologne",
        "district": "Alstadt-Sued",
        "region": "NRW",
        "country": "Germany",
        "primaryContact": "Hermann Schmitz",
        "description": "mailing"
      }
    ],
    "contactData": [
       {
         "value": "123456789",
         "type": "phone",
         "description": "primary"
       },
       {
         "value": "jon@doe.com",
         "type": "email",
         "description": "private"
       }
     ],
    "oihApplicationRecords": [{
      "applicationUid": "3",
      "recordUid": 98765,
      "created": 23215151,
      "lastModified": 36542364
    }]
  };

  return messages.newMessageWithBody(person);

  // function emitData() {
  //   self.emit('data', messages.newMessageWithBody(person));
  // }
  //
  // function emitError(e) {
  //   self.emit('error', e);
  // }
  //
  // function emitEnd() {
  //   console.log('Finished execution');
  //   self.emit('end');
  // }
  // Q()
  //   .then(getPersons)
  //   .then(emitData)
  //   .fail(emitError)
  //   .done(emitEnd);
}
// // access the value of the apiKey field defined in credentials section of component.json
// const apiKey = cfg.apiKey;
// // access the value of the status field defined in credentials section of component.json
// const status = cfg.status;
//
// if (!status) {
//     throw new Error('Status field is required');
// }
//
// console.log('About to find pets by status:', status);
//
// const requestOptions = {
//     uri: `${API_BASE_URI}/pet/findByStatus?status=${status}`,
//     headers: {
//         'api-key': apiKey
//     },
//     json: true
// };
//
// // return the promise that sends a request to the Petstore API
// return request.get(requestOptions)
//     .then((response) => {
//
//         console.log('Got %s pets', response.length);
//
//         if (response.length) {
//
//             // this message will be emitted to the platform
//             // please note that we wrap the request payload into a message object
//             return messages.newMessageWithBody({
//                 pets: response
//             });
//         }
//     });
// }
