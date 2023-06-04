const fs = require("fs").promises;

const writeText = async (newData) => {
  await fs.writeFile("./text/text.txt", newData);
};
module.exports = {
  writeText,
};
