import http from 'node:http'
import fs from 'node:fs'
import { Buffer } from 'node:buffer'
import { log } from 'node:console'

const server = http.createServer((req,res) => {
    const {method , url} =req
    if(method === 'GET' && url === '/'){
        fs.readFile('./public/index.html', (err,data) => {
            if(err){
                res.writeHead(500)
                return res.end(`error in handling the html file`)
            }
            res.writeHead(200, {"Content-type": "text/html"})
            res.end(data)
        })
    }else if(method === 'POST' && url === '/submit'){
        let body = ['hello my world']
        req.on('data', (chunk)=> {
            body.push(chunk)
        })

        req.on('end', ()=>{
            const parsedbody = Buffer.concat(body).toString()

            const result = parsedbody.split('=')[1].replace(/\+/g,' ')
            const decodedText = decodeURIComponent(result)
            res.writeHead(200,{'Content-type': 'text/html'})
            res.end(`
                <div style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-align: center; margin-top: 50px;">
<h1>server echoes:</h1>
<p style="font-size: 2rem; text-align: center;margin-top: 50px;">${decodedText}</p>
<a href="/" style="background-color: red;">Go back</a>
</div>
                `)
        })
    }else{
        res.writeHead(404)
        res.end(`not fond the server`)
    }
})

server.listen(8000, ()=>{
    console.log(`server is running in the 8000 port`);
    
})
