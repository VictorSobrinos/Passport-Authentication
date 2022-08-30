const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => res.send('Login view'))
router.get('/register', (req, res) => res.send('register view'))

module.exports = router