const net = require("net");
const clients = [];
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8");
  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Connection established!");
  });
  
  conn.write("Name: WJF");
  // Testing, do not want snake to move immediately
  // conn.write("Move: up");
  // var timeoutID = setTimeout(() => {"Move: right"}, 2000);
  
  
  return conn;
};


module.exports = connect;