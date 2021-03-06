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
 * Executes the trigger which generates a valid OIH task object
 *
 * @return {Object} - OIH task
 */
function processTrigger() {
  const task = {
    meta: {
      recordUid: '',
      oihUid: '',
    },
    collaborationElement: {
      header: {
        from: 'john.doe@email.com',
        to: 'jane.doe@email.com',
        cc: 'janet.doe@email.com',
        bcc: 'jonathan.doe@email.com',
        subject: 'RE: Your Question',
      },
      date: {
        date: '2018-01-01',
        day: 'Monday',
        time: '10:10:10',
      },
      properties: {
        messageID: '23',
        language: 'en',
        authentication: 'spf=pass smtp.mailfrom=email.com',
        mimeVersion: 1.3,
      },
      content: {
        format: 'HTML',
        content: 'Dear John, please find attached',
      },
      attachments: [{
        type: 'JPG',
        size: '54 KB',
      }],
    },
    substasks: [{
      task: 'Analyze system 1',
      details: {
        subject: 'analysis',
        startdate: '2018-01-01T10:10:10Z',
        enddate: '2018-03-01T10:10:10Z',
        reminderdate: '2018-02-01T10:10:10Z',
        content: 'To create a datamodel we have to analyze system 1...',
        status: 'in progress',
      },
    },
    {
      task: 'Analyze system 2',
      details: {
        subject: 'analysis',
        startdate: '2018-01-01T10:10:10Z',
        enddate: '2018-03-01T10:10:10Z',
        reminderdate: '2018-02-01T10:10:10Z',
        content: 'To create a datamodel we have to analyze system 2...',
        status: 'in progress',
      },
    },
    ],
    details: {
      task: 'Analyze systems',
      details: {
        subject: 'analysis',
        startdate: '2018-01-01T10:10:10Z',
        enddate: '2018-03-01T10:10:10Z',
        reminderdate: '2018-02-01T10:10:10Z',
        content: 'To create a datamodel we have to analyze system 1...',
        status: 'in progress',
      },
    },
  };

  return messages.newMessageWithBody(task);
}

module.exports = {
  process: processTrigger,
  taskTrigger: processTrigger,
};
