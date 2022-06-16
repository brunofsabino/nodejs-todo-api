import { Router } from 'express'
import * as apiController from '../controllers/apiController'

const router = Router()

router.get('/', apiController.home)


export default router