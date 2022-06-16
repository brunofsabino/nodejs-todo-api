import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import router from './routes/index'

dotenv.config()

const server = express()

server.use(cors())
server.use(router)

server.listen(process.env.PORT,()=>{
    console.log("Rodando na porta 3000")
})