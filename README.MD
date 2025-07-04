# 🏥 SGHSS - Sistema de Gestão Hospitalar e de Serviços de Saúde

Este projeto é um back-end desenvolvido para gerenciar pacientes, consultas e usuários com autenticação segura via JWT. Faz parte da disciplina de Projeto Multidisciplinar com foco na trilha **Back-end**.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## 📦 Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd SEU_REPOSITORIO
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
PORT=3000
DATABASE_URL=postgres://postgres:SUA_SENHA@localhost:5432/faculdade
JWT_SECRET=sua_chave_secreta
```

> ⚠️ Altere `SUA_SENHA` e `sua_chave_secreta` conforme sua configuração local.

---

## 🛠️ Executando o Projeto

### Comando para iniciar o servidor:

```bash
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

---

## 🧪 Endpoints Disponíveis

| Método | Endpoint           | Descrição                         | Protegido (JWT) |
|--------|--------------------|-----------------------------------|-----------------|
| POST   | /api/auth/signup   | Cadastrar usuário                 | ❌              |
| POST   | /api/auth/login    | Login e geração de token JWT      | ❌              |
| POST   | /api/pacientes     | Cadastrar paciente                | ✅              |
| GET    | /api/pacientes     | Listar todos os pacientes         | ✅              |
| POST   | /api/consultas     | Cadastrar nova consulta           | ✅              |
| GET    | /api/consultas     | Listar todas as consultas         | ✅              |

---

## 🧱 Estrutura do Banco de Dados

Você pode encontrar o DER na pasta do projeto.

---

## 📄 Documentação

Toda a documentação dos endpoints está disponível em:
- [`documentacao-api`](./API-DOC.md)

---

## 📌 Autor

- **Nome:** Carlos César Carissimi Araldi
- **RU:** 4303235
- **Curso:** CST ANÁLISE E DESENVOLVIMENTO DE SISTEMAS 

---

## ✅ Status do Projeto

✔️ Finalizado e funcional para fins acadêmicos.
