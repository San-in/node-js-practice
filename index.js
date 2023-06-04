// const user = require("./user");
// console.log(user);

// const textAPI = require("./text/textAPI");

// textAPI.addText(" Руслан!");
// textAPI.readText();
// textAPI.writeText("Знову привіт");
// textAPI.readText();
// textAPI.renameFile("profile");
// textAPI.deleteFile();

const fs = require("fs").promises;
const readline = require("readline");
const { program } = require("commander");
const path = require("path");
require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

program.option("-s, --save [type]", "Save your results", "results.txt");
program.parse(process.argv);
const logFile = program.opts().save;

const saveResults = async (message) => {
  try {
    fs.appendFile(logFile, `${message} \n`);
    console.log(`Succesfully saved in ${logFile}`.green);
  } catch (error) {
    console.log(error);
  }
};

let attempt = 10;
const guessedNumber = Math.ceil(Math.random() * 10);

const game = () => {
  if (!attempt) {
    console.log("Attemts are run off".red);
    return;
  }
  rl.question("Guess a number\n".green, (answer) => {
    const number = Number(answer);

    if (isNaN(number)) {
      console.log("Please enter only number".red);
      attempt -= 1;
      console.log(`You have ${attempt} attempt(s)`.yellow);
      return game();
    }
    if (number > 10 || number < 1) {
      console.log("Number should be between 1 and 10".red);
      attempt -= 1;
      console.log(`You have ${attempt} attempt(s)`.yellow);
      return game();
    }
    if (number === guessedNumber) {
      attempt -= 1;
      console.log(
        `Congratulations you have guessed with ${10 - attempt} attempt(s)`.green
      );
      saveResults(
        ` ${new Date().toLocaleDateString()} You have guessed with ${
          10 - attempt
        } attempt(s) `
      );
      rl.close();
    } else {
      console.log("Please try again".red);
      attempt -= 1;
      console.log(`You have ${attempt} attempt(s)`.yellow);
      game();
    }
  });
};
game();
