import http from 'node:http'
import path from 'node:path'


const port = 8000
const users = [
    { id: 1, name: 'sujith', role: 'Web Dev' },
    { id: 2, name: 'sreeja', role: 'Designer' },
    { id: 3, name: 'latha', role: 'Manager' },
    { id: 3, name: 'vinitha', role: 'team lead' },
    { id: 3, name: 'chadana', role: 'CEO' }
];

const server = http.createServer((req,res)=>{

    if(req.url === '/hi'){
        res.writeHead(200,{'content-type':'text/plain'})
        console.log('it was working fine !');
        res.end('welcome')
    } else if(req.url === '/users'){
        const useritmes = users.map((user) =>{ return `
           <li>
            <h1><strong>${user.name} - </strong>${user.id} - ${user.role} </h1>
           </li> 
        `}).join('');
        
        console.log('users info bro !');
        
        res.writeHead(200,{'content-type':'text/html'})
        res.end(`<h1> user directory <br> <ul>${useritmes}</ul></h1>`)
    }
    
    else{
        
        res.writeHead(404,{'content-type':'text/plain'})
        res.end('server is working fine !')
    }
    
    
})

server.listen(port,()=>{
    console.log(`server is running at the ${port}`); 
})