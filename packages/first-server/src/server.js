const express = require('express')
const app = express();
const port = process.env.APP_PORT || 3000

app.get('/', (req, res) => res.send('<h1>Hello World from <span style="color: blue">FIRST</span> Server! :(</h1>'))

app.listen(port, () => {
    console.log(`First server up! Port: ${port} At: ${new Date()}`)
})