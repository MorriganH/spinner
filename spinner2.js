let spinner = ['|', '/', '-', '\\'];
for (let delay = 0; delay <= 8; delay += 1) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[delay % spinner.length]}   `);
  },delay * 200 + 100);
}