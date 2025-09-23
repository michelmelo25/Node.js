import http from 'node:http' 
import { json } from './middlewares/json.js'
import { Database } from './database.js'
import { randomUUID } from 'node:crypto'

// - Criar usuário
// - Listagem de Usuários
// - Edição de Usuários
// - Remoção de Usuários

// - HTTP
//    - Método HTTP
//    - URL
//    - Cabeçalhos
//    - Corpo (body)

// GET => Busca um recurso do back-end
// POST => Cria um recurso no back-end
// PUT => Atualiza um recurso do back-end
// PATCH => Atualiza uma informação específica de um recurso no back-end
// DELETE => Remove um recurso do back-end

// GET /users => Busca um recurso do Back-end
// POST /users => Cria um recurso no Back-end

// Stateful - Stateless

// Cabeçalhos (Requisição/resposta) => Metadados

// HTTP Status Code

const database = new Database()

const server = http.createServer(async (request, response) => {
  const {method, url} = request

  await json(request, response)

  // console.log(body)

  if(method === 'GET' && url === '/users'){
    const users = database.select('users')
    return response    
    .end(JSON.stringify(users))
  }


  if(method === 'POST' && url ==='/users'){

    const {name, email} = request.body
    const users = {
      id:randomUUID(),
      name: name,
      email: email
    }
    database.insert('users', users)

    return response.writeHead(201).end()
  }
  return response.writeHead(404).end()
})

server.listen(3333) 