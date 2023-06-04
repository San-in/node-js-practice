const fs = require("fs").promises;

const readText = async () => {
  const text = await fs.readFile("./text/text.txt", "UTF-8");
  console.log(text);
};
module.exports = {
  readText,
};
