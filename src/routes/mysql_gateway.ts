import { Router, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

const router = Router()

router.get('/test', (req: Request, res: Response) => {
    res.status(200).json('Test mysql gateway')
})

// Export
export default router