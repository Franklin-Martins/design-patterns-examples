class Logger {

    constructor(){
        this.config = {
            appName: "not configured"
        }
    }

    setConfig(config){
        this.config = config;
    }

    log(message, ...params){
        console.log(this.config, message, params)
    }

}

module.exports = new Logger();