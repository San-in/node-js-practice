const fs = require("fs").promises;

const addText = async (additionalData) => {
  await fs.appendFile("./text/text.txt", additionalData);
};
module.exports = {
  addText,
};
