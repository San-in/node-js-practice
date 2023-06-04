const { name, surName } = require("./data");
const age = require("./createAge").createAge(2023, 1992);

module.exports = {
  name,
  surName,
  age,
};
