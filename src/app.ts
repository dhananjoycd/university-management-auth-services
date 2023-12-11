import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import usersRoute from './app/modules/users/users.route'
import { logger } from './shared/logger'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application Routes
logger.info(app.get('env'))

app.use('/api/v1/users/', usersRoute.router)

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('Working succeesfully')
})

export default app
