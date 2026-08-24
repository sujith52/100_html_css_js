import { log } from 'node:console'
import path from 'node:path'
import fs from 'node:fs/promises'
import responsehead from '../responsehead.js'
import { getcontentypes } from './getcontenttypes.js'


export default async function serverd( req,res, basedir){
    const publicdir = path.join(basedir, 'public')
    const filepath = path.join(
        publicdir,
         req.url === '/' ? 'index.html' : req.url)
    try {
        const cont = await fs.readFile(filepath)
        const ext = path.extname(filepath)
        const contentype = getcontentypes(ext)
        // responsehead(res,statusCode,content, payload)
        responsehead(res,200, 'text/html',cont)
    } catch (error) {
        console.log(error);
        
    }
    
}