const express = require('express')
const Logger = require('./Logger/Logger')
const app = express()
const routes = require('./routes')

Logger.setConfig({
    appName : "Franklin App"
})

app.use(express.json())
app.use(routes)


app.listen(3333, ()=>{
    Logger.log('Logger has been initialized')
    console.log('server running on 3333')
})