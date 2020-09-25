const { exec } = require("child_process");

start();

function start() {
  exec("pm2 start index.js", (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(stdout);
  });
}

var restart = setInterval(() => start(), 86400000);
