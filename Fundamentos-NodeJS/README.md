# Fundamentos Node.js - Rocketseat

Este projeto faz parte da formação Node.js da Rocketseat, módulo **Fundamentos do Node.js**. Ele explora os principais conceitos da plataforma, como manipulação de streams, criação de servidores HTTP, rotas, manipulação de dados em memória, e boas práticas de estruturação de aplicações Node.js.

## Estrutura do Projeto

```
Fundamentos-NodeJS/
├── anotacoes.md
├── package.json
├── src/
│   ├── database.js
│   ├── routs.js
│   └── utils/
│       └── build-route-path.js
└── streams/
    ├── fundamentals.js
    ├── fake-upload-to-http-stream.js
    └── stream-http-server.js
```

## Conteúdo dos Arquivos

### `anotacoes.md`
Arquivo de anotações com resumos dos principais conceitos abordados:
- Estrutura de aplicações Node.js
- Diferença entre Stateful e Stateless
- Métodos HTTP e suas funções
- Streams no Node.js (Readable, Writable, Transform, Duplex)
- Exemplos práticos de uso de streams
- Conceitos de Query Parameters, Route Parameters e Request Body

### `src/database.js`
Implementa uma classe `Database` para simular operações de banco de dados em memória:
- Métodos para inserir, selecionar, atualizar e deletar usuários.

### `src/routs.js`
Define as rotas da aplicação:
- **GET /users**: Lista usuários, com suporte a busca por nome/email.
- **POST /users**: Cria um novo usuário.
- **DELETE /users/:id**: Remove um usuário pelo ID.
- **PUT /users/:id**: Atualiza dados de um usuário.

### `src/utils/build-route-path.js`
Função utilitária para construir e padronizar caminhos de rotas, facilitando o uso de parâmetros dinâmicos.

### `streams/fundamentals.js`
Demonstra o funcionamento de streams:
- Criação de uma stream de leitura que gera números de 1 a 100.
- Transformação dos dados (inversão do número).
- Escrita dos dados processados.

### `streams/fake-upload-to-http-stream.js`
Simula o envio de dados via stream para um servidor HTTP usando o método POST.

### `streams/stream-http-server.js`
Servidor HTTP que recebe dados via stream, processa e retorna o resultado:
- Utiliza uma Transform Stream para inverter os números recebidos.

## Como executar

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Execute os exemplos de streams:
   ```bash
   node streams/fundamentals.js
   node streams/fake-upload-to-http-stream.js
   node streams/stream-http-server.js
   ```
3. Para testar as rotas, utilize ferramentas como [Insomnia](https://insomnia.rest/) ou [Postman](https://www.postman.com/).

## Aprendizados

- Manipulação de streams para processamento eficiente de dados.
- Criação de servidores HTTP sem frameworks.
- Implementação de rotas e manipulação de dados em memória.
- Diferença entre tipos de streams e suas aplicações.
- Estruturação de projetos Node.js de forma organizada.

---

Projeto desenvolvido para fins educacionais, como parte da formação Node.js da Rocketseat.