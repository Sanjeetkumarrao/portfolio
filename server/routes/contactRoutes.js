const express  = require('express');
const { body } = require('express-validator');
const { submitContact, getContacts } = require('../controllers/contactController');

const router = express.Router();

const validate = [
  body('name').trim().notEmpty().withMessage('Name required').isLength({ max: 80 }),
  body('email').trim().isEmail().withMessage('Valid email required').normalizeEmail(),
  body('message').trim().notEmpty().withMessage('Message required').isLength({ min: 10, max: 2000 }),
];

router.post('/', validate, submitContact);
router.get('/',            getContacts);   // protect in production

module.exports = router;
