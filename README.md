# Projeto Ambev - Sistema de Gerenciamento de Usuários

Este é um projeto full-stack desenvolvido por Levi Nakayama como parte do processo seletivo da Ambev. O sistema consiste em um backend em NestJS e um frontend em React, implementando um CRUD completo de usuários com cache em Redis.

## 📋 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)
- [PostgreSQL](https://www.postgresql.org/) (versão 14 ou superior)
- [Redis](https://redis.io/) (versão 6 ou superior)

## 🚀 Configuração do Ambiente

### 1. Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/levinakayama/ambev.git
cd ambev
```

### 2. Configurando o Backend

```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env na raiz do backend
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Configurações do PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha
DB_DATABASE=ambev_db

# Configurações do Redis
REDIS_HOST=localhost
REDIS_PORT=6379

# Configurações da Aplicação
PORT=3000
```

### 3. Configurando o Banco de Dados

```bash
# Conecte ao PostgreSQL
psql -U seu_usuario

# Crie o banco de dados
CREATE DATABASE ambev_db;

# Saia do PostgreSQL
\q
```

### 4. Configurando o Frontend

```bash
# Entre na pasta do frontend
cd ../frontend

# Instale as dependências
npm install
```

## 🏃‍♂️ Executando o Projeto

### 1. Iniciando o Backend

```bash
# Na pasta backend
npm run start:dev
```

O servidor backend estará rodando em: http://localhost:3000

### 2. Iniciando o Frontend

```bash
# Na pasta frontend
npm run dev
```

O servidor frontend estará rodando em: http://localhost:3001

## 📚 Estrutura do Projeto

### Backend (NestJS)
```
backend/
├── src/
│   ├── users/         # Módulo de usuários com CRUD completo
│   │   ├── dto/       # Data Transfer Objects
│   │   ├── entities/  # Entidades do TypeORM
│   │   └── services/  # Lógica de negócio
│   ├── config/        # Configurações do projeto
│   └── main.ts        # Ponto de entrada
```

### Frontend (React)
```
frontend/
├── src/
│   ├── api/           # Cliente da API com React Query
│   ├── components/    # Componentes React reutilizáveis
│   │   ├── UserForm/  # Formulário de criação/edição
│   │   └── UserList/  # Listagem de usuários
│   ├── types/         # Definições de tipos TypeScript
│   └── App.tsx        # Componente principal
```

## 🔍 Testando a Aplicação

1. Abra http://localhost:3001 no seu navegador
2. Você verá a interface de gerenciamento de usuários
3. Clique em "Criar Usuário" para adicionar um novo usuário
4. Preencha o formulário com:
   - Nome
   - Email
   - Senha

## 🛠️ Comandos Úteis

### Backend
```bash
# Executar testes
npm run test

# Formatar código
npm run format

# Lint
npm run lint
```

### Frontend
```bash
# Build de produção
npm run build

# Preview do build
npm run preview
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/suabranch`)
3. Commit suas mudanças (`git commit -m 'Add some mudanças'`)
4. Push para a branch (`git push origin feature/suabranch`)
5. Abra um Pull Request

## 📝 Notas Técnicas

- Backend desenvolvido em NestJS com TypeORM para persistência
- Cache implementado com Redis para melhor performance
- Frontend em React com TypeScript e React Query
- Interface responsiva com Tailwind CSS
- Validação de dados tanto no frontend quanto no backend
- Tratamento de erros e feedback ao usuário

## ⚠️ Solução de Problemas Comuns

### Problema: Erro de conexão com o banco de dados
- Verifique se o PostgreSQL está rodando
- Confirme se as credenciais no .env estão corretas
- Tente reiniciar o servidor PostgreSQL

### Problema: Erro de conexão com o Redis
- Verifique se o Redis está rodando
- Confirme se as configurações no .env estão corretas
- Tente reiniciar o servidor Redis

### Problema: Erro no frontend
- Limpe o cache do navegador
- Execute `npm install` novamente
- Verifique se o backend está rodando

## 📞 Contato

Para dúvidas ou sugestões, entre em contato:
- Email: levisn@gmail.com
- GitHub: [levinakayama](https://github.com/levinakayama)

