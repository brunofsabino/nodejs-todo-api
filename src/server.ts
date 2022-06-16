import express, {ErrorRequestHandler} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'

import router from './routes/index'

dotenv.config()

const server = express()

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({ extended: true }))

server.use(cors())
server.use(router)

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(400); // Bad Request
    console.log(err);
    res.json({ error: 'Ocorreu algum erro.' });
}
server.use(errorHandler);

server.listen(process.env.PORT,()=>{
    console.log("Rodando na porta 3000")
})