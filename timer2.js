const readline = require('readline');

const goBeep = () => {
  process.stdout.write('\x07');
};

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
});


