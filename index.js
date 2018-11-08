const readline = require('readline');

module.exports = (question, hideAnswer = false) => {
  return new Promise((resolve, reject) => {
    let rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question(question, (answer) => {
      if (hideAnswer) rl.output.write('\n');
      rl.close();
      resolve(answer);
    });

    rl.on('SIGINT', () => {
      rl.output.write('\n');
      process.exit();
    });

    rl._writeToOutput = (stringToWrite) => {
      if (hideAnswer) {
        rl.output.write('*');
      } else {
        rl.output.write(stringToWrite);
      }
    };
  });
}
