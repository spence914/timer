// Readline and keypress documentation from https://nodejs.org/api/readline.html and https://stackoverflow.com/questions/55181297/where-can-i-find-documentation-of-the-keypress-event-in-node-js

const readline = require('readline');

const goBeep = () => {
  process.stdout.write('\x07');
};

const setTimer = (seconds) => {
  console.log(`Setting timer for ${seconds} seconds...`);
  setTimeout(goBeep, 1000 * seconds);
};

const numKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

process.stdin.on('keypress', (str, key) => {
  if (key.name === 'b') {
    goBeep();
  }

  if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (numKeys.includes(key.name)) {
    setTimer(key.name);
  }
});


