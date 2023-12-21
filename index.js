const { log } = require('console')
const http = require('http')

const server = http.createServer((req, res) =>{
   console.log(req)
   res.write('welcom to my website')
   res.end()
})

server.listen(5000)