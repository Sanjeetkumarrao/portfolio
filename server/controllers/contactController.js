const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');

const submitContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ success: false, errors: errors.array().map((e) => e.msg) });

    const contact = await Contact.create(req.body);
    res.status(201).json({ success: true, message: 'Message received!', id: contact._id });
  } catch (err) { next(err); }
};

const getContacts = async (_req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (err) { next(err); }
};

module.exports = { submitContact, getContacts };
