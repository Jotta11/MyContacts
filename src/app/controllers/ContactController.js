const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: Not found
      return response.status(404).json({ error: 'User not found!' });
    }
    response.json(contact);
  }

  async store(request, response) {
    const { name, email, phone, category_id } = request.body;

    const contactExists = await ContactsRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This E-mail is already been taken' });
    }

    const contact = await ContactsRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found!' });
    }

    await ContactsRepository.delete(id);
    response.sendStatus(204);
  }

};

module.exports = new ContactController();