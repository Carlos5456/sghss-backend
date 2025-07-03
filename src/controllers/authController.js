const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../config/db');

exports.signup = async (req, res) => {
  const { email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);
  const result = await pool.query(
    'INSERT INTO usuarios (email, senha) VALUES ($1, $2) RETURNING *',
    [email, hashedPassword]
  );
  res.json(result.rows[0]);
};

exports.login = async (req, res) => {
  const { email, senha } = req.body;
  const result = await pool.query('SELECT * FROM usuarios WHERE email = $1', [email]);
  const user = result.rows[0];
  if (!user || !(await bcrypt.compare(senha, user.senha))) return res.status(401).json({ error: 'Credenciais inválidas' });
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
  res.json({ token });
};