//import json-server
const jsonserver=require('json-server')


//2 create a server app using json server
const server=jsonserver.create()

//3 setup path for db.json file
const router=jsonserver.router('db.json')

//4 return a middleware used by json server

const middleware=jsonserver.defaults()

//5 setup a port number

const port=process.env.PORT || 3001

//6  use in server

server.use(middleware)
server.use(router)

//7 to run the server
server.listen(port,()=>{
    console.log('listening on port'+port);
})