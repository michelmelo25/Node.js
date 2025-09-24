# My Tasks

Este projeto é uma API RESTful simples para gerenciamento de tarefas (To-Do), desenvolvida em Node.js sem frameworks como Express. Ele utiliza arquivos JSON para persistência dos dados e permite operações CRUD (criar, ler, atualizar, deletar) em tarefas, além de importar tarefas via CSV.

## Funcionalidades

- **Listar tarefas:**  
  `GET /tasks`  
  Retorna todas as tarefas, podendo filtrar por `title` e/ou `description` via query params.

- **Criar tarefa:**  
  `POST /tasks`  
  Cria uma nova tarefa com título e descrição.

- **Atualizar tarefa:**  
  `PUT /tasks/:id`  
  Atualiza título e/ou descrição de uma tarefa existente.

- **Deletar tarefa:**  
  `DELETE /tasks/:id`  
  Remove uma tarefa pelo ID.

- **Marcar como concluída:**  
  `PATCH /tasks/:id/complete`  
  Marca uma tarefa como concluída.

- **Importar tarefas via CSV:**  
  O script em `src/streams/upload-csv-to-http-satrem.js` lê um arquivo CSV e envia cada linha como uma nova tarefa para a API.

## Estrutura dos arquivos

- `src/model/task.js`  
  Define a classe `Task`, responsável pela estrutura e métodos das tarefas.

- `src/database.js`  
  Gerencia a persistência dos dados em `db.json`, incluindo métodos para selecionar, inserir, atualizar e deletar tarefas.

- `src/routs.js`  
  Define as rotas da API e seus respectivos handlers.

- `src/server.js`  
  Cria o servidor HTTP, faz o roteamento das requisições e aplica middlewares.

- `src/middlewares/json.js`  
  Middleware para tratar requisições com corpo JSON.

- `src/utils/extract-query-params.js`  
  Função utilitária para extrair parâmetros de consulta da URL.

- `src/streams/upload-csv-to-http-satrem.js`  
  Script para importar tarefas de um arquivo CSV.

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Inicie o servidor:
   ```bash
   node src/server.js
   ou
   npm run dev
   ```

3. Para importar tarefas via CSV:
   ```bash
   node src/streams/upload-csv-to-http-satrem.js
   ```

## Observações

- O projeto não utiliza Express, apenas módulos nativos do Node.js.
- Os dados são salvos em `db.json` na raiz do projeto.
- Adicione `node_modules/` ao `.gitignore` para evitar subir dependências ao repositório.

## Requisitos

- Node.js 18+
- npm

---

**Rocketseat | Node.js | My Tasks | Michel Melo**