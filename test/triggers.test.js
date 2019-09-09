const { calendarEventTrigger } = require('../lib/triggers/generateCalendarEvent.js');
const { documentTrigger } = require('../lib/triggers/generateDocument.js');
const { documentFolderTrigger } = require('../lib/triggers/generateDocumentFolder.js');
const { documentRelationTrigger } = require('../lib/triggers/generateDocumentRelation.js');
const { emailTrigger } = require('../lib/triggers/generateEmail.js');
const { organizationTrigger } = require('../lib/triggers/generateOrganization.js');
const { personTrigger } = require('../lib/triggers/generatePerson.js');
const { taskTrigger } = require('../lib/triggers/generateTask.js');

describe('Triggers - generate valid OIH objects', () => {
  it('should generate a Calendar Event', () => {
    const event = calendarEventTrigger();
    expect(event.body.meta.recordUid).toEqual('');
    expect(event.body.data.collaborationElement.subject).toEqual('RE: Your Question');
    expect(event.body.data.collaborationElement.format).toEqual('HTML');
    expect(event.body.data.collaborationElement).toEqual(expect.objectContaining({
      from: expect.any(String),
      to: expect.any(String),
      cc: expect.any(String),
      authentication: expect.any(String),
      attachments: expect.any(Array),
    }));
    expect(event.body.data.contacts).toHaveLength(1);
    expect(event.body.data.contacts[0].name).toEqual('John Doe');
    expect(event.body.data.contacts[0].calendars).toHaveLength(1);
    expect(event.body.data.contacts[0].calendars[0].calendar).toEqual('http://cal.example.com/calA');
    expect(event.body.data.eventDetails.location).toEqual('Room 123');
    expect(event.body.data.eventDetails.start).toEqual('2018-01-01');
  });

  it('should generate a Document', () => {
    const document = documentTrigger();
    expect(document.body.meta.recordUid).toEqual('');
    expect(document.body.data).toEqual(expect.objectContaining({
      name: expect.any(String),
      description: expect.any(String),
      baseType: expect.any(String),
      parentUid: expect.any(String),
      path: expect.any(String),
      policies: expect.any(Array),
      currentVersion: expect.any(Object),
    }));
    expect(document.body.data.currentVersion.label).toEqual('1.0.1');
    expect(document.body.data.currentVersion.mimeType).toEqual('image/png');
    expect(document.body.data.currentVersion.url).toEqual('http://example.com');
    expect(document.body.data.currentVersion.properties).toHaveLength(1);
    expect(document.body.data.currentVersion.subResource[0].type).toEqual('rendition');
    expect(document.body.data.currentVersion.subResource[0].url).toEqual('http://test.com');
  });

  it('should generate a Document Folder', () => {
    const documentFolder = documentFolderTrigger();
    expect(documentFolder.body.oihApplicationRecords[0].recordUid).toEqual('12');
    expect(documentFolder.body.name).toEqual('parent');
    expect(documentFolder.body.description).toEqual('reference');
    expect(documentFolder.body.baseType).toEqual('document');
    expect(documentFolder.body.path).toEqual('/test/route');
    expect(documentFolder.body.policies).toHaveLength(0);
  });

  it('should generate a Document Relation', () => {
    const documentRelation = documentRelationTrigger();
    expect(documentRelation.body.meta.recordUid).toEqual('');
    expect(documentRelation.body.data.name).toEqual('parent');
    expect(documentRelation.body.data.type).toEqual('reference');
    expect(documentRelation.body.data.targetUid).toEqual('123');
  });

  it('should generate an Email', () => {
    const email = emailTrigger();
    expect(email.body.meta.recordUid).toEqual('');
    expect(email.body.data.collaborationElement.header.from).toEqual('john.doe@email.com');
    expect(email.body.data.collaborationElement.content.content).toEqual('Dear John, please find attached');
    expect(email.body.data.collaborationElement).toEqual(expect.objectContaining({
      header: expect.any(Object),
      date: expect.any(Object),
      properties: expect.any(Object),
      content: expect.any(Object),
      attachments: expect.any(Array),
    }));
    expect(email.body.data.threads).toHaveLength(1);
    expect(email.body.data.threads[0].threadname).toEqual('appointment');
  });

  it('should generate an Organization', () => {
    const organization = organizationTrigger();
    expect(organization.body.meta.recordUid).toEqual('');
    expect(organization.body.data.name).toEqual('Example Company');
    expect(organization.body.data.logo).toEqual('https://www.logo.com/png');
    expect(organization.body.data).toEqual(expect.objectContaining({
      name: expect.any(String),
      logo: expect.any(String),
      addresses: expect.any(Array),
      contactData: expect.any(Array),
      calendar: expect.any(Array),
      category: expect.any(Array),
    }));

    expect(organization.body.data.addresses).toHaveLength(2);
    expect(organization.body.data.addresses[0].street).toEqual('Schildergasse');
    expect(organization.body.data.addresses[0].city).toEqual('Cologne');
    expect(organization.body.data.addresses[0].primaryContact).toEqual('Alexander Mustermann');
    expect(organization.body.data.addresses[1]).toEqual(expect.objectContaining({
      street: expect.any(String),
      streetNumber: expect.any(String),
      unit: expect.any(String),
      zipCode: expect.any(String),
      city: expect.any(String),
      district: expect.any(String),
      region: expect.any(String),
      country: expect.any(String),
    }));
    expect(organization.body.data.contactData[2].value).toEqual('administration@examplecompany.com');
  });

  it('should generate a Person', () => {
    const person = personTrigger();
    expect(person.body.meta.recordUid).toEqual('');
    expect(person.body.data.firstName).toEqual('John');
    expect(person.body.data.jobTitle).toEqual('Sales manager');
    expect(person.body.data).toEqual(expect.objectContaining({
      title: expect.any(String),
      salutation: expect.any(String),
      lastName: expect.any(String),
      gender: expect.any(String),
      birthday: expect.any(String),
      notes: expect.any(String),
      displayName: expect.any(String),
      language: expect.any(String),
      photo: expect.any(String),
      nickname: expect.any(String),
      contactData: expect.any(Array),
      calendar: expect.any(Array),
      category: expect.any(Array),
    }));

    expect(person.body.data.addresses).toHaveLength(2);
    expect(person.body.data.addresses[0].street).toEqual('Hohestr');
    expect(person.body.data.addresses[0].city).toEqual('Cologne');
    expect(person.body.data.addresses[0].primaryContact).toEqual('Hermann Schmitz');
    expect(person.body.data.addresses[1]).toEqual(expect.objectContaining({
      street: expect.any(String),
      streetNumber: expect.any(String),
      unit: expect.any(String),
      zipCode: expect.any(String),
      city: expect.any(String),
      district: expect.any(String),
      region: expect.any(String),
      country: expect.any(String),
    }));

    expect(person.body.data.contactData[2].value).toEqual('95248793');
    expect(person.body.data.contactData[3].type).toEqual('email');
    expect(person.body.data.calendar[0].calendar).toEqual('http://example.org/kalender/emuster');
  });

  it('should generate a Task', () => {
    const task = taskTrigger();
    expect(task.body.meta.recordUid).toEqual('');
    expect(task.body.collaborationElement.header.from).toEqual('john.doe@email.com');
    expect(task.body.collaborationElement.content.content).toEqual('Dear John, please find attached');
    expect(task.body.collaborationElement).toEqual(expect.objectContaining({
      header: expect.any(Object),
      date: expect.any(Object),
      properties: expect.any(Object),
      content: expect.any(Object),
      attachments: expect.any(Array),
    }));

    expect(task.body.substasks).toHaveLength(2);
    expect(task.body.substasks[0].task).toEqual('Analyze system 1');
    expect(task.body.substasks[0].details.status).toEqual('in progress');
    expect(task.body.substasks[1].details).toEqual(expect.objectContaining({
      subject: expect.any(String),
      startdate: expect.any(String),
      enddate: expect.any(String),
      reminderdate: expect.any(String),
      content: expect.any(String),
      status: expect.any(String),
    }));
  });
});
