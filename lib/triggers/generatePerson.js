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

const { messages } = require('elasticio-node');

/**
 * Executes the trigger which generates a valid OIH person object
 *
 * @return {Object} - OIH person
 */
function processTrigger() {
  const person = {
    meta: {},
    data: {
      title: 'Prof.',
      salutation: 'Mr.',
      firstName: 'John',
      middleName: 'Anthony',
      lastName: 'Doe',
      gender: 'male',
      birthday: 'Wed, 14 Jun 1999 07:00:00 GMT',
      notes: 'Private notes',
      displayName: 'johndoe',
      language: 'english',
      nickname: 'johny',
      jobTitle: 'Sales manager',
      photo: 'http://example.org/photo.jpg',
      anniversary: '14 Jun',
      addresses: [{
        street: 'Hohestr',
        streetNumber: '3',
        unit: 'a',
        zipCode: '50667',
        city: 'Cologne',
        district: 'Alstadt-Sued',
        region: 'NRW',
        country: 'Germany',
        primaryContact: 'Hermann Schmitz',
        description: 'primary',
      },
      {
        street: 'Rudolfplatz',
        streetNumber: '3',
        unit: 'a',
        zipCode: '50667',
        city: 'Cologne',
        district: 'Alstadt-Sued',
        region: 'NRW',
        country: 'Germany',
        primaryContact: 'Hermann Schmitz',
        description: 'mailing',
      },
      ],
      contactData: [{
        value: '123456789',
        type: 'phone',
        description: 'primary',
      },
      {
        value: '00224477',
        type: 'phone',
        description: 'private',
      },
      {
        value: '95248793',
        type: 'phone',
        description: 'mobile',
      },
      {
        value: 'jon@doe.com',
        type: 'email',
        description: 'private',
      },
      {
        value: 'xing.de/yourUsername',
        type: 'xing',
        description: 'xing',
      },
      {
        value: '98326307',
        type: 'phone',
        description: 'secondary',
      },
      ],
      calendar: [{
        calendar: 'http://example.org/kalender/emuster',
        busyCalendar: 'http://example.org/kalender/emuster/busy',
        requestCalendar: 'http://example.org/kalender/emuster/appointment',
        description: 'private',
      }],
      category: [{
        name: 'private',
        description: 'private address data of the person',
      }],
    },
  };

  return messages.newMessageWithBody(person);
}

module.exports = {
  process: processTrigger,
  personTrigger: processTrigger,
};
