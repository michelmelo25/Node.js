import http from 'node:http' 

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

const users = []

const server = http.createServer((request, response) => {
  const {method, url} = request

  if(method === 'GET' && url === '/users'){
    return response
    .setHeader('Content-Type', 'application/json')
    .end(JSON.stringify(users))
  }


  if(method === 'POST' && url ==='/users'){
    users.push({
      id:1,
      name: 'John Doe',
      email: 'johndoe@example.com'})

      return response.writeHead(201).end()
  }
  return response.writeHead(404).end()
})

server.listen(3333) 