const fs = require("fs").promises;

const renameFile = async (newName) => {
  await fs.rename("./text/text.txt", `./text/${newName}.txt`);
};
module.exports = {
  renameFile,
};
