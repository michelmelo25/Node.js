import { knex as setupKnex } from 'knex'
import config from '../knexfile.js'

// export const config: Knex.Config = {
//   client: 'sqlite',
//   connection: {
//     filename: './db/app.db',
//   },
//   useNullAsDefault: true,
//   migrations: {
//     extension: 'ts',
//     directory: './db/migrations',
//   },
// }

export const knex = setupKnex(config)
