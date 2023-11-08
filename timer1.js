const times = process.argv.slice(2);
const sortedTimes = times.sort((a, b) => a - b);

for (let time of sortedTimes) {
  if (time < 0 || isNaN(time)) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  },(1000 * time));
}




