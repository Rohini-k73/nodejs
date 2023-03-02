// ExpressServer.js

// this is web api

import { Express } from "express";
import bodyParser from "body-Parser";

class ExpressServer {
    constructor(hostname =process.env.LOCAL_HOST, port= process.env.DEFAULT_PORT2) {
        this.serverName = 'Express Server API';
        this.hostname = hostname;
        this.port = port;
    
        //Auto Start Server
        this.initServer()
        
      }
}
