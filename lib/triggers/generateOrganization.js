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

  const organization = {
    "name": "Example Company",
   "logo": "https://www.logo.com/png",
   "addresses": [
      {
      	"street": "Schildergasse",
        "streetNumber": "8",
      	"unit": "c",
      	"zipCode": "50667",
      	"city": "Cologne",
      	"district": "Innenstadt",
      	"region": "NRW",
      	"country": "Germany",
      	"primaryContact": "Alexander Mustermann",
      	"description": "mailing"
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
      	"description": "other"
      }
    ],
 	"contactData": [
      {
        "value": "123456789",
        "type": "phone",
        "description": "primary"
      },
      {
        "value": "95248793",
        "type": "phone",
        "description": "service"
      },
      {
        "value": "administration@examplecompany.com",
        "type": "email",
        "description": "administration"
      },
      {
        "value": "https://www.yourCompany.de/home",
        "type": "url",
        "description": "homepage"
      }
    ],
  	"calendar": [],
  	"category": [
      {
      "name":"business",
      "description": "primary address"
      }
    ],
    "oihApplicationRecords": [{
      "applicationUid": "3",
      "recordUid": 98765,
      "created": 23215151,
      "lastModified": 36542364
    }]
  };

  return messages.newMessageWithBody(organization);
}
