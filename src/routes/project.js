const express = require('express');
const { body, validationResult } = require('express-validator');
const ProjectController = require('../controllers/ProjectController');
const router = express.Router();

router.post('/create_project', 
    
  body('name')
    .not()
    .isEmpty()
    .trim()
    .escape()
    .withMessage('El nombre es obligatorio'),
  body('models')
    .notEmpty()
    .isObject(),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }else{
      
    }

  }
);

module.exports = router;