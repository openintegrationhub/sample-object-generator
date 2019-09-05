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
 * Executes the trigger which generates a Snazzy Contacts person object
 *
 * @return {Object} - Snazzy Contacts person
 */
function processTrigger() {
  const person = {
    meta: {
      recordUid: '25mop1jzwjc4by',
      oihUidEncrypted: '',
    },
    data: {
      lastName: 'Smith',
      firstName: 'Monica',
      salutation: 'Mrs.',
      nickname: 'Mony',
      gender: 'female',
      birthday: '12.05.1970',
      jobTitle: '',
    },
  };

  return messages.newMessageWithBody(person);
}

module.exports = {
  process: processTrigger,
  snazzyPersonTrigger: processTrigger,
};
