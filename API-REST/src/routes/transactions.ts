import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'

export async function transactionsRotes(app: FastifyInstance) {
  app.get('/', async (request, replay) => {
    const transactions = await knex('transactions').select('*')

    return replay.status(200).send({ transactions })
  })

  app.get('/:id', async (request, replay) => {
    const getTransactionParamsSchema = z.object({
      id: z.uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(request.params)

    const transaction = await knex('transactions').where('id', id).first()

    return replay.status(200).send({ transaction })
  })

  app.get('/summary', async (request, replay) => {
    const transactions = await knex('transactions')
      .sum('amount', { as: 'amount' })
      .first()

    return replay.status(200).send({ transactions })
  })

  app.post('/', async (request, replay) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return replay.status(201).send()
  })
}
