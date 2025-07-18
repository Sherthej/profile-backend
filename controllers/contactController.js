const Contact = require('../models/contact'); // Mongoose model

const createContact = async (req, res) => {
  try {
    const { name, email, contact, address } = req.body;

    const newContact = new Contact({ name, email, contact, address });
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error.message);
    res.status(500).json({ error: 'Failed to save contact' });
  }
};

module.exports = { createContact };
