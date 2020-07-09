const routes = require('express').Router()
const Logger = require('./Logger/Logger')

routes.get('/', (req,res)=>{
    Logger.log('Home route called class Logger')
    return res.json({message: "Working"})
})

module.exports = routes;