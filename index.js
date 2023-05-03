const express = require('express');
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello from my first ever server');
})

app.get('/data', (req, res) => {
    res.send('more data comming soon');
})

app.listen(port, () => {
    console.log(`My first server is running on port: ${port}`);
})