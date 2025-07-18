const Contact = require('../models/contact'); // Mongoose model

const createContact = async (req, res) => {
  try {
    const { name, email, contact, address } = req.body;

    // ✅ Basic validation
    if (!name || !email || !contact || !address) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // ✅ Save to MongoDB
    const newContact = new Contact({ name, email, contact, address });
    await newContact.save();

    res.status(201).json({ message: 'Contact saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error.message);

    // ✅ More descriptive error message
    res.status(500).json({ error: 'Server error while saving contact' });
  }
};

module.exports = { createContact };
