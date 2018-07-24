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
     "photo": "http://example.org/photo.jpg",
     "anniversary": "14 Jun",
   	"jobTitle": "Sales Manager",
   	"notes": "no additional information",
     "addresses": [
       {
       	"street": "Hohestr.",     	"streetNumber": "3",
       	"unit": "a",
       	"zipCode": "50667",
       	"city": "Cologne",
       	"district": "Alstadt-Sued",
       	"region": "NRW",
       	"country": "Germany",
       	"primaryContact": "Hermann Schmitz",
       	"description": "private"
       },
       {
       	"street": "Hohenzollernring",
       	"streetNumber": "83",
       	"unit": "",
       	"zipCode": "50678",
       	"city": "Cologne",
       	"district": "Alstadt-Sued",
       	"region": "NRW",
       	"country": "Germany",
       	"primaryContact": "Walter Hermann",
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
         "value": "00224477",
         "type": "phone",
         "description": "private"
       },
       {
         "value": "95248793",
         "type": "phone",
         "description": "mobile"
       },
       {
         "value": "jon@doe.com",
         "type": "email",
         "description": "private"
       },
       {
         "value": "xing.de/yourUsername",
         "type": "xing",
         "description": ""
       }
     ],
   	"calendar": [
       {
       	"calendar": "http://example.org/kalender/emuster",
         "busyCalendar": "http://example.org/kalender/emuster/busy",
         "requestCalendar":"http://example.org/kalender/emuster/appointment",
         "description":"private"
       }
     ],
   	"category": [
       {
       "name":"private",
       "description": "private address data of the person"
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
