import { Router, Request, Response, NextFunction } from 'express'
import { body, validationResult } from 'express-validator'
import conns from "../libs/connectors";
import mysql from 'mysql2/promise'

const router = Router()

router.get('/test', (req: Request, res: Response) => {
    res.status(200).json('Test mysql gateway')
})

router.post('/', async (req: Request, res: Response, next:NextFunction) => {
    try {
        const resql = await execQuery(req.body.sql)
        res.status(200).json(resql)
    } catch (error) {
        next(error)
    }
})

const execQuery = async (sql: string) => {
    let conn = await conns.mysql()
    const [rows] = await conn.query(sql)
    return rows
}

// Export
export default router