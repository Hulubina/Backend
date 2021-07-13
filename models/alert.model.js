const Sequelize = require("sequelize");
const db = require("../config/db.config");

const alert = db.define("Alert", {
  /*id: {
    unique: true,
    allowNull: false,
    autoIncremented: true,
    primaryKey: true,
  },*/
  name: {
    type: Sequelize.STRING(50),
    validate: {
      //is: ["^[a-z]+$",'i'], //only allows letters
      notNull: true,
    },
  },
  status: {
    type: Sequelize.STRING(20),
    validate: {
      notNull: true,
      isIn: [["NEW"], ["SEEN"]],
    },
  },
  dateCreated: {
    type: Sequelize.DATE,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  issue_id: {
    unique: true,
    allowNull: false,
    autoIncremented: true,
  },
});

module.exports = alert;
