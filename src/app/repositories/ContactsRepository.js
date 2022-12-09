const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'João',
    email: 'jgbgdondim@gmail.com',
    phone: '63999171577',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Rafael',
    email: 'rafael@gmail.com',
    phone: '63999457690',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  create(name, email, phone, category_id) {
    return new Promise((resolve) => {
      const newContact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };
      contacts.push(newContact)
      resolve(newContact);
    })
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
};

module.exports = new ContactsRepository();
