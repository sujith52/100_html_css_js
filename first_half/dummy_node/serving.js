import http from 'node:http';
import fs from 'node:fs'; 
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import parseing from 'chunk.js'

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = http.createServer((req, res) => {
    console.log(`Request for: ${req.url}`);
    


    if (req.url === '/' || req.url === '/index.html') {
        // Point to public/index.html
        const filePath = path.join(__dirname, 'public', 'index.html');
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('HTML File Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });

    } else if (req.url === '/style.css') {
        // Point to public/style.css
        const filePath = path.join(__dirname, 'public', 'style.css');
        
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                return res.end('CSS File Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(data);
        });

    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(8000, () => {
    console.log('Server running at http://localhost:8000');
});