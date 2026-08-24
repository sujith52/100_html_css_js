import http from 'node:http'
import path from 'node:path';
import serverd from './utils/serverstatic.js'
import fs from 'node:fs'
import responsehead from './responsehead.js'


const PORT =8000
const __dirname = import.meta.dirname


const server = http.createServer( async(req,res)=>{
    
    await serverd(req,res, __dirname)
    // responsehead(res,statusCode,content, payload)
    responsehead(res,200,'text/html','<html><h1>This id from the server bro</h1></html>')
    
})

server.listen(PORT,() => {console.log(`The serevr is running in the ${PORT}`)})