# API-REST
Este projeto é uma API REST para gerenciamento de transações, desenvolvida em Node.js com o framework Fastify e TypeScript. Sua percistencia é em SQlite, utilizando Knox como Query Builder.

# Funcionalidades
Amedida que suas funções forem criadas, serãm adiconadas nessa sessão.

# Estrutura dos arquivos
- `src/database.ts`  
    Define as configurações da base de dados da aplicaão
- `src/server.ts`   
    Cria o servidor HTTP
- `knexfile.ts`   
    Exporte de maneira defoul as configuração do knex
- `db` e `db/migration`   
    Armazena o banco de dados e as migrações da persistencia de dados.

# como rodar
1. Instale as dependências:
   ```bash
   npm install
   ```

2. Rodando as Migrações:    
    2.1 Cria uma m=nova migração
   ```bash
   npm run knex -- migrate:make <nome da migração>
   ```
   2.2 Executa as migrações
   ```bash
   npm run knex -- migrate:latest
   ```
   2.3 Reverte as migrações executadas
   ```bash
   npm run knex -- migrate:rollback
   ```

3. Inicie o servidor:
   ```bash
   npm run dev
   ```

# Requisitos
- Node.js 18+