// Timer that takes command line arguments and has system beep at each defined interval.


const sortedTimes = process.argv.slice(2).sort((a, b) => a - b); // Takes times passed to command line and sorts them by ascending order.

for (let time of sortedTimes) {
  if (time < 0 || isNaN(time)) { // If time passed is negative or not a number it is skipped entirely
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  },(1000 * time));
}




