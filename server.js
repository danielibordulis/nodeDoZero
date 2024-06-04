//import {createServer} from 'node:http'

//const server = createServer((request, response) => {
    
    //return response.write("oi")

    //return response.end()
//})

//server.listen(3333)

import {fastify} from 'fastify'

const server = fastify()
 
server.post('/videos' , () =>{
    return 'helo world'
})

 
server.get('/videos' , () =>{
    return 'helo world'
})

server.put('/videos/:id' , () =>{
    return 'helo world'
})

server.delete('/videos/:id' , () =>{
    return 'helo world'
})


server.listen({
    port: 3333,
}) 