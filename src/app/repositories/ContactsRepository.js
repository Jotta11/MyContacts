const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'João',
    email: 'jgbgdondim@gmail.com',
    phone: '63999171577',
    category_id: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
};

module.exports = new ContactsRepository();
