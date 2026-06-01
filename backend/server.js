const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT;

const server = express();

server.use(cors);
server.use(express.json);

server.get('/', (res) => {
    res.send("server is running");
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)  
})