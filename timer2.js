// Readline and keypress documentation from https://nodejs.org/api/readline.html and https://stackoverflow.com/questions/55181297/where-can-i-find-documentation-of-the-keypress-event-in-node-js

const readline = require('readline');

const goBeep = () => {
  process.stdout.write('\x07'); //function to produce a beep from the CLI
};

const setTimer = (seconds) => {
  console.log(`Setting timer for ${seconds} seconds...`); // Timer function logs length of timer in seconds, then begins it, runs goBeep when finished.
  setTimeout(goBeep, 1000 * seconds);
};

const numKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

readline.emitKeypressEvents(process.stdin); // Tells program to listen for keypress events

process.stdin.setRawMode(true); // RawMode causes program to read stdin character by character, not line by line or waiting for 'enter' to be pressed


process.stdin.on('keypress', (str, key) => { // on method is an eventListener, with keypress being the named event, 'str' being the string produced by the keypress, and key being an object with more info about the key (including name)
  if (str === 'b') {
    goBeep();
  }

  if (key.ctrl && key.name === 'c') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (numKeys.includes(str)) {
    setTimer(str);
  }
});


