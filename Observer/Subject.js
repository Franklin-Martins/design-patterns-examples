const EventEmitter = require('events').EventEmitter

class Subject extends EventEmitter{
    constructor(){
        super();
        this.observerCollection = []
    }
    
    add(observer){
        this.observerCollection.push(observer)
        this.emit("observerAdded", observer)
    }

    remove(observer){
        const observerToRemove = this.observerCollection.indexOf(observer);
        this.observerCollection.splice(observerToRemove, 1);
    }

    notifyObservers(comand){
        for(const observer of this.observerCollection){
            observer(comand)
        }
    }
}

module.exports = new Subject