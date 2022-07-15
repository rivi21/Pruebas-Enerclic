import express from 'express'
import dataRouter from './routes/dataRoutes'

const PORT = 5003

const app = express()

// Middleware para comprobar el header
app.use((req: any, res: any, next: any) => {
  if (req.header('Content-Type') === 'application/json') {
    next()
  } else {
    res.status(415).send({ message: 'Content-type unsopprted' })
  }
})

app.use(express.json())

app.use('/api', dataRouter)

app.listen(PORT, () => { console.log('Listening on port', PORT) })
