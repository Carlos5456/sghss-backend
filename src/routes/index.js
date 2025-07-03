const express = require('express');
const authRoutes = require('./auth');
const pacienteRoutes = require('./pacientes');
const consultaRoutes = require('./consultas');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/pacientes', pacienteRoutes);
router.use('/consultas', consultaRoutes);

module.exports = router;