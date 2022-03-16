const net = require("net");
connect = require("./client");


console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  // anytime user inputs, line 11 will execute leading to function 'handleUserInputs'
  stdin.on("data", handleUserInputs); // << code added by me
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInputs = function(key) {
  // \u0003 equates to ctrl + c on keyboard
  if (key === '\u0003') {
    process.exit();
  }
};

setupInput(); 