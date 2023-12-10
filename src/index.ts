import express, {Request, Response} from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from Express Typescript (mod2)');
})

app.listen(port, ()=> {
    console.log(`Server runnig at port: ${port}`)
})

