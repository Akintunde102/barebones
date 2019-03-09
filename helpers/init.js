//This file is for creating functions I will use through out the application
//For now, it only contains my lightweight logging function
const chalk = require('chalk').default;

const show = function(offOn = 'on'){
  let clg;
  
  this.offOn = offOn;
  
  if (this.offOn === 'off'){ clg = input => input;  }
  else {clg = input => console.log(input); }

    this.blue =  cont=>clg(chalk.blue(cont));
    this.ord =  clg;
    this.white = cont=>clg(chalk.white(cont));
    this.green = cont=>clg(chalk.greenBright(cont));
    this.red = cont=>clg(chalk.red(cont));
  };
const log = new show();
module.exports = { log }



