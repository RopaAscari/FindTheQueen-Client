import socketIOClient  from "socket.io-client";

export default class Connection {
    constructor(client) {
       this.client = 'http://127.0.0.1:7621'
    }
  connect = (client) => {
    const socket =  socketIOClient(client);
    return socket;
  }
}
