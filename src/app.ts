import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'

import taskRoutes from './routes/tasks'
import mysqlRoutes from './routes/mysql_gateway'

dotenv.config()

console.log('PORT', process.env.GAT_PORT)

const app = express();

const appServer = {
    crearServidor: () => {
        app.use(express.json())
        app.use(cors())
        app.use('/tasks', taskRoutes)
        app.use('/mysql', mysqlRoutes)
        
        app.get('/', (req: Request, res: Response) => {
            res.send('Hello from Database Gateway Typescript');
        })
        
        // Add this error handling middleware
        app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err.stack);
            res.status(500).send('Something went wrong');
        });
    },
    lanzarServidor: () => {
        const port = process.env.GAT_PORT || 3000;
        app.listen(port, () => {
            console.log(`Server runnig at port*: ${port}`)
        })
    }
}

export default appServer



