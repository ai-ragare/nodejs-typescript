import dotenv from 'dotenv'
import mysql from 'mysql2/promise'

dotenv.config()


const connectors = {
    mysql: async () => {
        const cfg: mysql.ConnectionOptions = {
            host: process.env.MYSQL_HOST,
            port: 3306 || process.env.MYSQL_PORT,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE
        }
        const con = await mysql.createConnection(cfg)
        return con
    }

}

export default connectors