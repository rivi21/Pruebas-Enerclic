import express from 'express'
import getAllData from '../controllers/dataController'

const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/:id', getAllData)

export default router
