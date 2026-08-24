import { error, log } from 'node:console'
import http from 'node:http'
import { getdata } from './db.js'
import {jsonresponse} from './jsonresponse.js'
import { getdats } from './getdata.js'
const PORT = 8000


const server = http.createServer(async(req,res) => {
    const destinations = await getdata()

    const urlobj = new URL(req.url, `http://${req.headers.host}`)
    const queryobj = Object.fromEntries(urlobj.searchParams)
    
    


    if(urlobj.pathname === '/api' && req.method === 'GET'){
        const filtereddestinations = destinations
        console.log(queryobj);
        
        console.log("This is from server");
        console.log(JSON.stringify(destinations));
        jsonresponse(res, 200, destinations)
        
    }else if(req.url.startsWith('/api/name') && req.method === 'GET')
    {
        const name = req.url.split('/').pop()
        
        const filterpeak = getdats(destinations, 'name', name)
        jsonresponse(res, 200, filtereddata)
        


    }else if(req.url.startsWith('/api/peak') && req.method === 'GET')
    {
        const peak = req.url.split('/').pop()
        const filterpeak = getdats(destinations, 'peak', peak)
        jsonresponse(res, 200,filterpeak)
    }
    else {
        jsonresponse(res, 404, ({
            error: 'not found ',
            message :'the request route doesnt exist bro '
        }))
        
    }
    
})

server.listen(PORT, ()=> {console.log(`The server is starting at ${PORT}`);
})
