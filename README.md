# Tela de Login com Backend

![Testes](https://img.shields.io/badge/testes-passing-brightgreen?style=flat-square)
![Build](https://img.shields.io/badge/build-passing-blue?style=flat-square)
![Linguagens](https://img.shields.io/github/languages/top/ThiaraFernandes/sistema-login-back?style=flat-square)
![Licença](https://img.shields.io/github/license/ThiaraFernandes/sistema-login-back?style=flat-square)
![Último Commit](https://img.shields.io/github/last-commit/ThiaraFernandes/sistema-login-back?style=flat-square)

Este é um projeto Fullstack com uma tela de **Login e Cadastro de Usuários**, desenvolvido com **React, TypeScript, Node.js, Express e MongoDB**. O sistema permite o registro de novos usuários, editar e excluir usuários cadastrados e a exibição dos usuários cadastrados, com integração total entre front-end e back-end.

## 🖼️ Imagens do Projeto

### 📌 Tela de Login
![Tela de Login](./src/prints/tela-login.png)

### 📌 Tela de Usuários Cadastrados
![Usuários Cadastrados](./src/prints//usuarios.png)


---

## 🚀 Tecnologias Utilizadas

### Frontend
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

## ⚙️ Funcionalidades

- Cadastro de novos usuários
- Editar usuários cadastrados
- Excluir usuários cadastrados
- Login de usuários
- Listagem de usuários cadastrados
- Validação de formulários
- Integração com banco de dados MongoDB
- Comunicação entre front e back via API REST
- Responsivo para todos os tamanhos de telas
 - Testes automatizados

---

## 💡 Como Rodar o Projeto

### Pré-requisitos
- Node.js instalado
- MongoDB Atlas ou local
- Gerenciador de pacotes (npm ou yarn)

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```

### 2. Instale as dependências do frontend e backend

```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

### 3. Configure o .env no backend
```bash
Crie um arquivo .env na pasta backend com sua string de conexão do MongoDB:

env
MONGO_URI=mongodb+srv://usuario:senha@cluster.mongodb.net/nome-do-banco
PORT=3000
```


### 4. Inicie o servidor backend
```bash
cd backend
npm run dev
```

### 5. Inicie o frontend
```bash
cd ../frontend
npm run dev
```
---
## 🧪 Testes Automatizados
Este projeto conta com testes automatizados para garantir a estabilidade e qualidade das funcionalidades.

### 🔧 Dependências utilizadas
Frontend
- Jest

- React Testing Library

- ts-jest

Backend
 - Jest

- Supertest

- ts-jest

### 📁 Estrutura dos testes
- Frontend: arquivos .test.tsx na pasta src/, testando a renderização e funcionamento dos componentes React.
- Backend: arquivos .test.ts na pasta src/, testando as rotas e lógica de negócio com Supertest.

### ▶️ Como rodar os testes
#### No Frontend
```bash
cd frontend
npm run test
```
#### No Backend

```bash
cd frontend
npm run test
```


## Desenvolvido por Thiara Fernandes
 - [Linkedin](https://www.linkedin.com/in/thiarafernandes/)
 - [GitHub](https://github.com/ThiaraFernandes)