const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const pool = require('../config/db');

router.use(auth);

// POST /api/consultas
router.post('/', async (req, res) => {
  const { data, paciente_id, profissional, descricao } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO consultas (data, paciente_id, profissional, descricao) VALUES ($1, $2, $3, $4) RETURNING *',
      [data, paciente_id, profissional, descricao]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao cadastrar consulta', detalhes: error.message });
  }
});

// GET /api/consultas
router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM consultas');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar consultas' });
  }
});

module.exports = router;
