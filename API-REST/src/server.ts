import fastify from 'fastify'
import cookie from '@fastify/cookie'

import { env } from './env'
import { transactionsRotes } from './routes/transactions'

const app = fastify()

app.register(cookie)
app.register(transactionsRotes, {
  prefix: 'transactions',
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server running on http://localhost:3333')
  })
