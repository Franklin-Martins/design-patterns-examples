const express = require('express')
const app = express()

const subject = require('./Subject')

subject.on("observerAdded", ob=> ob())

function Observer1(){
    console.log('observer1 firing')
}
function Observer2(){
    console.log('observer2 firing')
}

subject.add(Observer1)
subject.add(Observer2)




app.listen(3333, ()=>{
    console.log('app running on 3333')
})


