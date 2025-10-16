import { config } from 'dotenv'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z
    .enum(['develompment', 'test', 'production'])
    .default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error(
    'Invalide environment variables!\n',
    z.prettifyError(_env.error),
  )
  //   console.error(z.treeifyError(_env.error))

  throw new Error('Invalide environment variables!')
}

export const env = _env.data
