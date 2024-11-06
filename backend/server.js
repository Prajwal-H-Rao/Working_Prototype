require('dotenv').config();
const http = require('http')
const express = require('express');
const cors = require('cors');

const {Server:SocketServer} = require('socket.io')

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

const port = process.env.PORT || 3000;
server.listen(port,()=>{
    console.log(`The Docker server is running on port:${port}`);
})