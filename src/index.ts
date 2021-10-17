import express from 'express'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import router from './router'

dotenv.config()
const app = express()
app.use(helmet())
app.use(express.json())
app.use(morgan(process.env.ENVIRONMENT === 'development' ? 'dev' : 'common'))
app.use(router)

const port = Number(process.env.PORT) || 8080
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})
