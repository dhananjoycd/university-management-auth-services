import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { logger } from './shared/logger'
import { UserRoutes } from './app/modules/user/user.route'

const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application Routes
logger.info(app.get('env'))

app.use('/api/v1/users/', UserRoutes)

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working succeesfully')
})

export default app
