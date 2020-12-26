'use strict';

const { exec } = require( 'child_process' );
const cb = (err, stdout, stderr) => {
  if (err) {
    // node couldn't execute the command
    return;
  }

  // the *entire* stdout and stderr (buffered)
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
};

let currentEnv = 'local';
let currentBrowser = 'chrome';

if (((process || {}).argv || [])[3]) {
  currentEnv = process.argv[3];
}
if (((process || {}).argv || [])[5]) {
  currentBrowser = process.argv[5];
}

exec(`cypress run --env process_env=${currentEnv} --browser ${currentBrowser}`, cb);

// npm run test
// npm run test -- --env local --browser firefox
// npm run test -- --env local --browser chrome
// npm run test -- --env local --browser edge
// npm run test -- --env local
// npm run test -- --env dev --browser chrome