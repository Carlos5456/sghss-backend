# 📘 SGHSS - Documentação da API Back-end

Sistema de Gestão Hospitalar e de Serviços de Saúde – Back-end

---

## 🔐 Autenticação

### `POST /api/auth/signup`
Cria um novo usuário.

**Requisição JSON:**
```json
{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

**Resposta JSON:**
```json
{
  "id": 1,
  "email": "usuario@email.com",
  "senha": "criptografada"
}
```

**Status HTTP:** `201 Created`

---

### `POST /api/auth/login`
Autentica o usuário e gera um token JWT.

**Requisição JSON:**
```json
{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

**Resposta JSON:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Status HTTP:** `200 OK`

---

## 🧍 Pacientes

### `POST /api/pacientes`
Cadastra um novo paciente. **(Requer JWT)**

**Requisição JSON:**
```json
{
  "nome": "João da Silva",
  "cpf": "12345678900",
  "data_nascimento": "1990-05-10"
}
```

**Resposta JSON:**
```json
{
  "id": 1,
  "nome": "João da Silva",
  "cpf": "12345678900",
  "data_nascimento": "1990-05-10T00:00:00.000Z"
}
```

**Status HTTP:** `201 Created`

---

### `GET /api/pacientes`
Lista todos os pacientes. **(Requer JWT)**

**Resposta JSON:**
```json
[
  {
    "id": 1,
    "nome": "João da Silva",
    "cpf": "12345678900",
    "data_nascimento": "1990-05-10T00:00:00.000Z"
  }
]
```

**Status HTTP:** `200 OK`

---

## 🩺 Consultas

### `POST /api/consultas`
Registra uma nova consulta. **(Requer JWT)**

**Requisição JSON:**
```json
{
  "data": "2025-07-05T14:30:00",
  "paciente_id": 1,
  "profissional": "Dra. Camila Rocha",
  "descricao": "Consulta de rotina"
}
```

**Resposta JSON:**
```json
{
  "id": 1,
  "data": "2025-07-05T14:30:00.000Z",
  "paciente_id": 1,
  "profissional": "Dra. Camila Rocha",
  "descricao": "Consulta de rotina"
}
```

**Status HTTP:** `201 Created`

---

### `GET /api/consultas`
Lista todas as consultas. **(Requer JWT)**

**Resposta JSON:**
```json
[
  {
    "id": 1,
    "data": "2025-07-05T14:30:00.000Z",
    "paciente_id": 1,
    "profissional": "Dra. Camila Rocha",
    "descricao": "Consulta de rotina"
  }
]
```

**Status HTTP:** `200 OK`

---
