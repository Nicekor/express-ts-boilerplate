import { Router } from 'express'
import { user } from './routes'

const router = Router()

router.get('/user', user.findOne)

export default router
