import cors from 'cors'
import express from 'express'
import dbConnection from './config/dbConnection'
import appRouter from './routes'

const app = express()

// app parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(
  cors({
    origin: ['https://www.recipe.90to.com',"https://recipe-delta-roan.vercel.app", 'http://localhost:5173'],
  }),
)
// db connection
dbConnection()
// base route
app.get('/', (req, res) => {
  res.status(200).send({ success: true })
})

// App router
app.use('/api/v1', appRouter)

export default app
