export default  function responsehead(res,statusCode,content, payload){
    res.setHeader('Content-Type',content)
    res.statusCode = statusCode
    res.end(payload)
}