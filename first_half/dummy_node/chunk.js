export async function parseing(req) {
    body = ''
    for await(const chunk of req){
        body += chunk
    }
    try {
        return JSON.parse(body)
        
    } catch (error) {
        console.log(`invalid error : ${error}`);
        
    }
}