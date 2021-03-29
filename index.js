var robot = require("robotjs");
const readline = require('readline');
const fs = require('fs');
robot.setKeyboardDelay(0);
const readInterface = readline.createInterface({
    input: fs.createReadStream('input.txt'),
    console: false
});

fs.writeFile('output.txt', '', function (err) {
    if (err) throw err;
  });
readInterface.on('line', function(line) {
    var line2 = "/tts " + line;
    if(line2 == "/tts "){

    }
    else{
        console.log("/tts " + line);
        fs.appendFile('output.txt', "/tts " + line + "\n", function (err) {});
        done(line2);
    }
});

function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  } 

  async function done(line2){
      type(line2)
  }
  function type(string){
    var chars = string.split('');
    chars.forEach(e => {
        console.log(e)
        robot.keyTap(e)
    })
    robot.keyTap('enter')
    console.log(chars)
  }