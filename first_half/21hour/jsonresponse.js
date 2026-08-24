export const jsonresponse = (res, statusCode, callback)=>{
    res.statusCode = statusCode
    res.setHeader('Content-Type','application/json')
    res.end(JSON.stringify(callback))
}