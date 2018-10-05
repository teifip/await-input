const readline = require('readline');


function getInput(question, hideAnswer, callback) {
  let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question(question, (answer) => {
    if (hideAnswer) rl.output.write('\n');
    rl.close();
    callback(answer);
  });

  rl._writeToOutput = (stringToWrite) => {
    if (hideAnswer) {
      rl.output.write('*');
    } else {
      rl.output.write(stringToWrite);
    }
  };
}


module.exports = (question, hideAnswer, callback) => {
  if (typeof callback === 'function') {
    getInput(question, hideAnswer, callback);
  } else {
    return new Promise((resolve, reject) => {
      getInput(question, hideAnswer, resolve);
    });
  }
}
