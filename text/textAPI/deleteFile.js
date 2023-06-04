const fs = require("fs").promises;

const deleteFile = async () => {
  await fs.unlink("./text/text.txt");
};
module.exports = {
  deleteFile,
};
