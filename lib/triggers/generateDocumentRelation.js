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

const { messages } = require('elasticio-node');

/**
 * Executes the trigger which generates a valid OIH document relation object
 *
 * @return {Object} - OIH document relation
 */
function processTrigger() {
  const documentRelation = {
    meta: {
      recordUid: '',
      oihUid: '',
    },
    data: {
      name: 'parent',
      type: 'reference',
      targetUid: '123',
      sourceUid: '456',
    },
  };

  return messages.newMessageWithBody(documentRelation);
}

module.exports = {
  process: processTrigger,
  documentRelationTrigger: processTrigger,
};
