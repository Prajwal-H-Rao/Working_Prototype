require('dotenv').config();
const http = require('http')
const express = require('express');
const cors = require('cors');

const {Server:SocketServer} = require('socket.io')

const {constructTree} = require('./utils/utils.js')

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const server = http.createServer(app)
const io = new SocketServer({
    cors:'*'
})

io.attach(server);

io.on('connection',(socket)=>{
    console.log(`Socket connected:${socket.id}`)
})

// app.get('/tree',async(req,res)=>{
//     const tree = await constructTree('/home/prao/projects/Working_Prototype/backend/node_modules')
//     console.log(tree)   
// })

const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log(`The Docker server is running on port:${port}`);
})