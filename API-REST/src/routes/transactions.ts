import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'
import { checkSassionIdExists } from '../middlewares/check-sessios-id-exists'

export async function transactionsRotes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSassionIdExists],
    },
    async (request, replay) => {
      const { sessionId } = request.cookies

      const transactions = await knex('transactions')
        .where('session_id', sessionId)
        .select()

      return replay.status(200).send({ transactions })
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSassionIdExists],
    },
    async (request, replay) => {
      const getTransactionParamsSchema = z.object({
        id: z.uuid(),
      })
      const { sessionId } = request.cookies

      const { id } = getTransactionParamsSchema.parse(request.params)

      const transaction = await knex('transactions')
        .where({
          session_id: sessionId,
          id,
        })
        .first()

      return replay.status(200).send({ transaction })
    },
  )

  app.get(
    '/summary',
    {
      preHandler: [checkSassionIdExists],
    },
    async (request, replay) => {
      const { sessionId } = request.cookies

      const transactions = await knex('transactions')
        .where('session_id', sessionId)
        .sum('amount', { as: 'amount' })
        .first()

      return replay.status(200).send({ transactions })
    },
  )

  app.post('/', async (request, replay) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { title, amount, type } = createTransactionBodySchema.parse(
      request.body,
    )

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()

      replay.cookie('sessionId', sessionId, {
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 daus
      })
    }

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
      session_id: sessionId,
    })

    return replay.status(201).send()
  })
}
