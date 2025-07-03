const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const pool = require('../config/db');

router.use(auth);

// POST /api/pacientes
router.post('/', async (req, res) => {
  const { nome, cpf, data_nascimento } = req.body;
  const result = await pool.query(
    'INSERT INTO pacientes (nome, cpf, data_nascimento) VALUES ($1, $2, $3) RETURNING *',
    [nome, cpf, data_nascimento]
  );
  res.json(result.rows[0]);
});

// GET /api/pacientes
router.get('/', async (req, res) => {
  const result = await pool.query('SELECT * FROM pacientes');
  res.json(result.rows);
});

module.exports = router;
