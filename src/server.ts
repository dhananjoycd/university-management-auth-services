import mongoose from 'mongoose'
import config from './config'
import app from './app'
import { errorlogger, logger } from './shared/logger'

async function boostrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('WOW! Database is connected')

    app.listen(config.port, () => {
      logger.info(`aplication listening port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error('Failed to connect database', err)
  }
}

boostrap()
