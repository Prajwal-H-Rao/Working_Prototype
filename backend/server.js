require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`The server is running on port:${port}`);
})