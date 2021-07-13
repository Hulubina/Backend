const Sequelize = require("sequelize");

module.exports = new Sequelize("internshipdb", "postgres", "nm7xmodxa", {
  host: "localhost",
  dialect: "postgres",
});
