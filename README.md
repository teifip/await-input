# await-input

Trivial function that modifies [rl.question()](https://nodejs.org/dist/latest-v8.x/docs/api/readline.html#readline_rl_question_query_callback) to make it usable in async functions, and optionally mask the user input (e.g. for passwords).

### Overview

```javascript
const awaitInput = require('await-input');

async function getUserInputs() {
  let username = await awaitInput('Username: ', false);
  // User input is displayed while typing

  let password = await awaitInput('Password: ', true);
  // User input is masked with asterisks while typing
}
```

Alternatively, the function can be invoked with a callback:

```javascript
awaitInput('Username: ', false, (username) => {
  console.log(username);
  // It's your choice if you want to trim the input
});
```

### Installation

This is too trivial to publish to [npm](https://www.npmjs.com/). Just download `index.js` for your use, or copy/paste the code at your convenience.

### Usage

**awaitInput(question, maskInput[, callback])**

`question` is the string used to prompt the user. In most of the cases you may want it to end with a blank, so that the input cursor is nicely placed at one column distance from the prompt.

`maskInput` is the boolean that controls whether the user input is masked with asterisks or not.

`callback` is the optional callback. When specified, it is invoked with the user input as the only argument (i.e. never returns an error). When `callback` is not specified a promise is returned. The promise is never rejected.
