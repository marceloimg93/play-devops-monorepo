const express = require('express')
const app = express();
const port = process.env.APP_PORT || 3001

app.get('/', (req,res) => res.send('<h1>Hello World from <span style="color: red">SECOND</span> Server! :D</h1>'))

app.listen(port, () => {
    console.log(`Second server up! Port: ${port} At: ${new Date()}`)
})